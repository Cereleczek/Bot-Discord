module.exports = {

  name: 'ping',
  description: 'Pong!',
  execute(msg, args){
    msg.channel.send('Pong!');
    console.log('Sending \'Pong!\'')
  },

}