const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjAxNTc1MjMwOTA0OTkxNzQ1.XTEV0Q.oj7FdX3DAl0KgMvEbJVGXGcLUA4';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply('hello~');
    }
})
bot.on('message', msg=>{
    if(msg.content === "tako"){
        msg.reply('dumb bitch');
    }
})

bot.login(token);