const fs = require('fs');
const config = require("./config/config.js");
const chalk = require("chalk");
const Discord = require('discord.js');
//const pingPong = require("./functions/pingPong");


let prefix = '%';
let licznik = 0;
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('C:/Users/skuza/Desktop/Glowne Projekty/Bot Discord/src/commands').filter(file => file.endsWith('.js'));


for(const file of commandFiles){

  const command = require(`C:/Users/skuza/Desktop/Glowne Projekty/Bot Discord/src/commands/${file}`);
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
    console.log(msg.content + ' ' + msg.author.tag + ' ' + msg.guild.channels.find(
      channel => channel.name.toLowerCase()
    ));    //client.channels pokazuje kanały
    client.commands.get(command).execute(msg, args);
} catch (error) {
    console.error(error);
    msg.reply('Error');
}

    

//================================KOMENDY======================================


    /*if (msg.content === 'newprefix') {

      //pingPong.ping();

      client.channels.get("827251470453571645").send("pong")
    }

    if (msg.content === prefix + 'ping') {

        //pingPong.ping();

        client.channels.get("827251470453571645").send("pong")
      }

    if (msg.author.tag === 'Seven#5030')
    {

        msg.channel.send("Sram ci do mordy Kacprze");

    }
    
    if ((msg.content) && (licznik === 2))
    {

        //msg.reply("Sram ci do mordy");
        //msg.channel.send("https://tenor.com/view/pooping-im-shit-shitting-bricks-gif-14455877")
        licznik = 0;
        //for(let i = 0; i<=10; i++)msg.channel.send("gówno")

    }
    else licznik++;


    if (msg.content === 'Send to poop dimension')
    {

      msg.channel.send('https://media.discordapp.net/attachments/534842938560217108/826911206203195432/tenor_1.gif')

    }*/


    //================================KONIEC=KOMEND================================


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


