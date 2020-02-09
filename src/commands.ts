import rps from './commandData/rps'
import { fight, accept, reject } from './commandData/fight'
import creator from './commandData/creator'
import commands from './commandData/commands'
import call from './commandData/call'

export const commands_: { [k: string]: Function } = {
    commands,
    call,
    rps,
    //fight
    fight,
    accept,
    reject,
    creator
}