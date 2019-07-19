const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjAxODgwODg3MzEwNjgwMDcw.XTIveA.tSCHK3NzVkKGgW7a5v0yxuFnkNA';

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