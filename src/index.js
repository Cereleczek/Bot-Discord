const mysql = require('mysql')
const fs = require('fs');
const config = require("./config/config.js");
const chalk = require("chalk");
const Discord = require('discord.js');
const sqlcon = require('./mySQL/connect');
const configjson = require('C:/Users/skuza/Desktop/Glowne Projekty/Discord-Bot/config.json');


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
  //const channel = client.channels.cache.get('534842938560217108');
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
    
  let sqlcon = mysql.createConnection(configjson.mysql);

  sqlcon.connect(err => {

    if (err) return console.log('Can\'t connect to database');

    console.log('MySQL has been connected!');

    sqlcon.query('SELECT * FROM panstwamiasta', (err, result, fields) => {
    
      let data = result.map(v => {
        //console.log(v.userID)
        
        msg.channel.send(`${v.ID} ${v.Panstwa} ${v.Miasta}`)
      });

    // data = JSON.stringify(result);
    // msg.channel.send(data);
    
    //console.log(data);
  
    });

    console.log(msg.content + ' ' + msg.author.tag + ' ' + msg.guild.channels.find(
      channel => channel.name.toLowerCase()
    ));    //client.channels pokazuje kanały
    client.commands.get(command).execute(msg, args);
  });
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


