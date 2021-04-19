const mysql = require('mysql')
const fs = require('fs');
const config = require("./config/config.js");
const chalk = require("chalk");
const Discord = require('discord.js');

let prefix = '%';
let licznik = 0;
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('C:/Users/skuza/Desktop/Glowne Projekty/Discord-Bot/src/commands').filter(file => file.endsWith('.js'));


for(const file of commandFiles){

  const command = require(`C:/Users/skuza/Desktop/Glowne Projekty/Discord-Bot/src/commands/${file}`);
  client.commands.set(command.name, command);

}

client.on('ready', () => {
  console.log(chalk.green(`Zalogowano!`));
});  


client.on('message', (msg) => {

  const {author} = msg;

module.exports = { msg};

if (msg.content === 'prefix') { 
  msg.channel.send('current prefix: ' + prefix); 
  return;
 }
else if (author.bot || !msg.content.startsWith(prefix))  return;

const args = msg.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

if (!client.commands.has(command)) console.log('no such command');
try {

    console.log(msg.content + ' ' + msg.author.tag + ' ' + msg.guild.channels.find(
      channel => channel.name.toLowerCase()
    ));    //client.channels pokazuje kanały
    client.commands.get(command).execute(msg, args);
  //});
} catch (error) {
    console.error(error);
    msg.reply('Error');
}


});

client.on('ready', () => {
  client.user.setStatus('available')
  client.user.setPresence({
      game: {
          name: 'Netflix',
          type: "watching",
          
      }
  });
});

client.login(config.token);


