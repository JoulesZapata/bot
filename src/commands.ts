import rps from './commandData/rps'
import { fight, accept, reject } from './commandData/fight'
import creator from './commandData/creator'
import help from './commandData/help'

export const commands: { [k: string]: Function } = {
    help,
    rps,
    //fight
    fight,
    accept,
    reject,
    creator
}