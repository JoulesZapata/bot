import { client } from 'tmi.js'
import { username, password } from './bot'
import { isCommand, runCommand } from './commandTools'

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
        bot.say(target, await runCommand(command, msg) + ` @${context.username}`)
    }
})

bot.on('roomstate', (channel, _) => {
    bot.say(channel, `Hello, ${channel.replace('#', '')}'s viewers <3`)
})

bot.connect()