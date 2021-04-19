const mysql = require('mysql');
const configjson = require('C:/Users/skuza/Desktop/Glowne Projekty/Discord-Bot/config.json');

module.exports = { 
    
    name: 'show',
    description: 'show results',
    execute(msg, args){
      
        let sqlcon = mysql.createConnection(configjson.mysql);

        sqlcon.connect(err => {

            if (err) return console.log('Can\'t connect to database');
        
            console.log('MySQL has been connected!');
        
            if(args[0]=='everything') {

            sqlcon.query('SELECT * FROM panstwamiasta', (err, result) => {
            
              let data = result.map(v => { 
                msg.channel.send(`\`\`\`${v.Panstwa} - ${v.Miasta}\`\`\``)
        
              });
            });
          } else if(args[0]=='city'){
            sqlcon.query(`SELECT Miasta FROM panstwamiasta WHERE Panstwa = '${args[1]}'`, (err, result) => {
            
              let data = result.map(v => { 
                msg.channel.send(`\`\`\`${v.Miasta}\`\`\``)
              });
            });
          } else if(args[0]=='country'){
            sqlcon.query(`SELECT Panstwa FROM panstwamiasta WHERE Miasta = '${args[1]}'`, (err, result) => {
            
              let data = result.map(v => { 
                msg.channel.send(`\`\`\`${v.Panstwa}\`\`\``)
                
              });
            });
          } 
    });
    },
}