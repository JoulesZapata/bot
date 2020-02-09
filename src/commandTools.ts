import { commands } from './commands'

export const isCommand = (msg: string): string => {
    if (msg[0] === '_') {
        let command = msg.split(' ')[0]
        command = command.substr(1)
        if (command in commands) {
            return command
        }
    }

    return ''
}

export const runCommand = async (command: string, msg: string): Promise<string> => {
    return await commands[command](msg)
}