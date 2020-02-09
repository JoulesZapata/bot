import { client } from 'tmi.js'
import { username, password } from './bot'
import { isCommand, runCommand } from './commandTools'
import { newChatter, removeChatter, getChatters } from './functions/getChatters'

const opts = {
    identity: {
        username,
        password
    },
    channels: [
        "getpost"
    ]
}

const bot = client(opts);

bot.on('chat', async (target, context, msg, self) => {
    if (self) return

    let command = isCommand(msg)
    if (command) {
        const reply: Reply = await runCommand(
            {
                target: target.replace('#', ''),
                context,
                msg,
                command
            });

        if (reply.cooldown) {
            return
        }

        if ('whisper' in reply && reply.whisper) {
            bot.whisper(context.username, reply.msg + ('append' in reply ? (' ' + reply.append) : ''))
        } else {
            bot.say(target, reply.msg + ` @${context.username} ` + ('append' in reply ? reply.append : ''))
        }
    }
})

bot.on("join", async (channel, username, self) => {
    if (self) {
        await getChatters(channel.replace('#', ''))
    }
    newChatter(channel.replace('#', ''), username)
});

bot.on("part", (channel, username, self) => {
    removeChatter(channel.replace('#', ''), username)
});

bot.connect()