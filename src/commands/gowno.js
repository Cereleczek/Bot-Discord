module.exports = {

    name: 'gowno',
    descrition: 'send image of shit',
    execute(msg, args) {
        msg.channel.send({
            files: [
                "C:/Users/skuza/Desktop/Glowne Projekty/Discord-Bot/src/images/gowno.jpg"
            ]
        });

}
}