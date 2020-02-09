let cooldowns: Record<string, Array<string>> = {}

const cd = 7000

export const coolDown = (channel, command): boolean => {
    if (!(channel in cooldowns)) {
        cooldowns[channel] = []
    }
    if (!cooldowns[channel].includes(command)) {
        cooldowns[channel].push(command)

        setTimeout((command) => {
            cooldowns[channel] = cooldowns[channel].filter(c => c !== command)
        }, cd, command)

        return false
    } else {

        return true
    }
}