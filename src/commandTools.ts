import { commands } from './commands'
import { coolDown } from './functions/commandCooldown'

const prefix = '_'

export const isCommand = (msg: string): string => {
    if (msg[0] === prefix) {
        let command = msg.split(' ')[0]
        command = command.substr(1)
        if (command in commands) {
            return command
        }
    }

    return ''
}

export const runCommand = async ({ target, context, msg, command }): Promise<Reply> => {
    if (coolDown(target, command)) return { msg: 'cooldown', cooldown: true }
    return await commands[command]({ target, context, msg, command })
}