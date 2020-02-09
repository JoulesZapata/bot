import * as fetch from 'isomorphic-fetch'

const channelsAndUsers: Record<string, Array<string>> = {}

const getChatters = async (channel): Promise<Array<string>> => {

    if (!(channel in channelsAndUsers)) {
        const response = await fetch(`https://tmi.twitch.tv/group/user/${channel}/chatters`);
        if (!response.ok) return []

        const json = await response.json()
        const chatters = json.chatters

        const users = [
            ...chatters['broadcaster'],
            ...chatters['vips'],
            ...chatters['moderators'],
            ...chatters['staff'],
            ...chatters['admins'],
            ...chatters['global_mods'],
            ...chatters['viewers'],
        ]

        channelsAndUsers[channel] = users

        return users
    } else {
        return channelsAndUsers[channel]
    }
}

const newChatter = (channel, chatter) => {
    channelsAndUsers[channel].push(chatter)
}

const removeChatter = (channel, chatter) => {
    channelsAndUsers[channel] = channelsAndUsers[channel].filter(c => c !== chatter)
}

export { getChatters, newChatter, removeChatter }