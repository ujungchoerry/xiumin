const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "%"

client.on('ready', function() {
    bot.user.setActivity("%help for commands")
    console.log("Booted up!");
})

client.on('message', msg=>{
    if(message.content.startsWith(PREFIX + "dany")){
        message.channel.send('my soulmate');
}});

client.login(Process.env.token);