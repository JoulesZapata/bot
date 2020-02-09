import { getChatters } from '../functions/getChatters'

let fights: fightRequest[] = [];

const fight = async ({ target, context, msg, command }): Promise<Reply> => {
    const users = await getChatters(target)
    let enemy: string = msg.split(' ')[1];

    if (!enemy) return { msg: `Missing username (${msg[0]}fight [user])` }
    enemy = enemy.toLowerCase()

    if (!users.includes(enemy)) return { msg: 'User not found, try fighting someone else,' }
    enemy = enemy.replace(/@/g, '')

    fights.push({
        user: context.username,
        enemy
    })

    return {
        msg: `@${enemy}, you've have been challanged to a fight by`,
        append: '( _accept or _reject )'
    }
}

const accept = ({ context }) => {
    let challenger = remove(context)

    if (!challenger) {
        return { msg: `You have not been challenged to a fight,` }
    }

    const runAwayLikeAChicken = Math.random() < 0.2
    const youLost = Math.random() < 0.5

    let response = ''

    if (youLost) {
        if (runAwayLikeAChicken) {
            response = `You were scared of @${challenger} and ran away like a chicken :chicken: ,`
        } else {
            response = `You have lost the fight against @${challenger}, FeelsBadMan `
        }
    } else {
        if (runAwayLikeAChicken) {
            response = `@${challenger} was scared of you and ran away like a chicken :chicken: ,`
        } else {
            response = `You have won the fight against @${challenger} PogU ,`
        }
    }

    return { msg: response }
}

const reject = ({ context }) => {
    let removed = remove(context)

    if (!removed) {
        return { msg: `You have not been challenged to a fight,` }
    }

    return { msg: `You have rejected the fight against ${removed},` }
}

const remove = (context): string => {
    let removed = ''

    fights = fights.filter(entry => {
        if (entry.enemy === context.username) {
            removed = entry.user
        }

        return entry.enemy !== context.username
    })

    return removed
}

export { fight, accept, reject }