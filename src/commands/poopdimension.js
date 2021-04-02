module.exports = {

    name: 'sendtopoopdimension',
    description: 'send you to the poop dimension',
    execute(msg, arg){
        msg.channel.send('https://media.discordapp.net/attachments/534842938560217108/826911206203195432/tenor_1.gif')
        console.log('Transfering ' + msg.author.tag + ' to poop dimension...')
    },
}