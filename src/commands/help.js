module.exports = {
    name: 'help',
    description: 'send list of commands',
    execute(msg, args){
        msg.channel.send(`\`\`\`
add [country name] [city name] - add country and city to database\n\n
avatar - show's your avatar\n\n
help - show commands\n\n
invite - send invite for this bot\n\n
ping - basically just send pong, you can try it\n\n
poopdimension - send you to poopdimension\n\n
rainbow - send rainbow gif\n\n
show everything - show every record from database \n\n
show city [country name] - show city, matching to country \n\n
show country [city name] - show country matching to city
        \`\`\``)
        
    },
}