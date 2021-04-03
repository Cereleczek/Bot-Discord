const Discord = require('discord.js');

module.exports = {

    name: 'avatar',
    description: 'show avatar image',
    execute(msg, args) {

        const avatarEmbed = new Discord
        .RichEmbed()
        .setColor(0xe0b336)
        .setImage(msg.author.avatarURL);

        msg.channel.send(avatarEmbed);

    }

}