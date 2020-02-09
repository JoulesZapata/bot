const rps = ({ target, context, msg, command }): Reply => {
    let item = msg.split(' ')[1]

    if (!item) return { msg: 'Enter a valid item (Rock, Paper, Scissors)' }

    item = item.toLowerCase()

    const items = {
        rock: { l: 'paper', w: 'scissors' },
        paper: { l: 'scissors', w: 'rock' },
        scissors: { l: 'rock', w: 'paper' }
    }

    if (!(item in items)) return { msg: 'Enter a valid item (Rock, Paper, Scissors)' }

    const botPick = Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)]
    let response = '';

    if (items[item].w === botPick) {
        response = `You picked ${item} and I picked ${botPick}, you win FeelsBadMan `;
    } else if (items[item].l === botPick) {
        response = `I picked ${botPick} and you picked ${item}, you lose PepeLaugh `
    } else {
        response = `We both picked ${item}, it's a tie FeelsWeirdMan `
    }

    return { msg: response + ',' }
}

export default rps