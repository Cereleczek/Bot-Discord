module.exports = {
    name: 'invite',
    description: 'send bot\'s invite',
    execute(msg, args){
        msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=821819928079499295&permissions=0&scope=bot')
        console.log('Sending bot\'s invitation')
    },
}