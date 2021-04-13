const mysql = require('mysql');
const config = require('C:/Users/skuza/Desktop/Glowne Projekty/Discord-Bot/config.json');

let con = mysql.createConnection(config.mysql);

//function connection() {}

module.exports = { 
    connecting: () => {
        con.connect(err => {

        if (err) return console.log('Can\'t connect to database');
    
        console.log('MySQL has been connected!');
});
}

}
