export default ({ context }): Reply => {
    const user = context.username.toLowerCase()

    if (user === 'getpost') {
        return { msg: 'You and @wedarobi created me,' }
    } else if (user === 'wedarobi') {
        return { msg: 'You and @getpost created me,' }
    } else {
        return { msg: '@getpost and @wedarobi created me,' }
    }
}