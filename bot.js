const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NDc1Nzg5MzQyNDIyMzM1NDg5.Dkkv9g.RHcDh82wnNOpnZ2xuXmCyN3QrdM'


bot.on('message', function(message) {
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hey ' + message.author + ', whats up?');
    }
});

bot.on('message', function(message) {
    if(message.content == 'ping')
    {
        message.reply('Pong!');
    }
});

bot.on('message', function(message) {
    if(message.content == 'say sorry MOB')
    {
        message.channel.sendMessage('I am sorry :(');
    }
});

bot.on('message', function(message) {
    if(message.content == 'PING')
    {
        message.reply('PONG!');
    }
});

bot.on('message', function(message) {
    if(message.content == 'best movie')
    {
        message.reply('The best movie is August Rush (2007).');
    }
});

bot.on('ready',function(){
    console.log('Ready');
})

bot.login(TOKEN);
client.login(process.env.BOT_TOKEN);
