import rps from './commandData/rps'
import { fight, accept, reject } from './commandData/fight'

export const commands: { [k: string]: Function } = {
    rps,
    //fight
    fight,
    accept,
    reject
}