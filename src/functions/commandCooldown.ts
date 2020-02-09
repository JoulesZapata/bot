let cooldowns = []

export const coolDown = (command): boolean => {
    if (!cooldowns.includes(command)) {
        cooldowns.push(command)

        setTimeout((command) => {
            cooldowns = cooldowns.filter(c => c !== command)
        }, 5000, command)

        return false
    } else {

        return true
    }
}