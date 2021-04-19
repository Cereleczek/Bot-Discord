const mysql = require('mysql');
const configjson = require('C:/Users/skuza/Desktop/Glowne Projekty/Discord-Bot/config.json');

module.exports = { 
    
    name: 'add',
    description: 'add country and city to database',
    execute(msg, args){
      
        let sqlcon = mysql.createConnection(configjson.mysql);

        sqlcon.connect(err => {

            if (err) return console.log('Can\'t connect to database');
        
            console.log('MySQL has been connected!');
        
            
            sqlcon.query(`INSERT INTO panstwamiasta (Panstwa, Miasta) VALUES ('${args[0]}', '${args[1]}')`, (err, result) => {
          
              if (err) console.log(err);
              else msg.channel.send(`\`\`\`country: ${args[0]} \n
              city: ${args[1]}\n
              Has been added to database\`\`\``);
              
            });
          
    });
    },
}