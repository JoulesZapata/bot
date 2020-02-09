const rps = (msg): string => {
    let item = msg.split(' ')[1]
    if (!item) return 'Enter a valid item (Rock, Paper, Scissors)'

    item = item.toLowerCase()

    const items = {
        rock: { l: 'paper', w: 'scissors' },
        paper: { l: 'scissors', w: 'rock' },
        scissors: { l: 'rock', w: 'paper' }
    }

    if (!(item in items)) return 'Enter a valid item (Rock, Paper, Scissors)'

    const botPick = Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)]

    if (items[item].w === botPick) {
        return `You picked ${item} and I picked ${botPick}, you win FeelsBadMan`
    } else if (items[item].l === botPick) {
        return `I picked ${botPick} and you picked ${item}, you lose PepeLaugh`
    } else {
        return `We both picked ${item}, it's a tie FeelsWeirdMan`
    }
}

export default rps