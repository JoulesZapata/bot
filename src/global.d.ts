type Reply = {
    whisper?: boolean,
    msg: string,
    append?: string
    cooldown?: boolean
}

type fightRequest = {
    user: string,
    enemy: string
}