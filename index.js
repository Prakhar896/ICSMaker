const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const ics = require('ics');
require('dotenv').config()
var PREFIX = 'i!'

// File imports
const create = require('./commands/create');

// Bot handlers
client.on('ready', () => {
    console.log('Bot is ready!')
    client.user.setActivity('i!ping', { type: 'PLAYING' })
})

client.on('messageCreate', message => {
    if (!message.content.startsWith(PREFIX)) return
    const args = message.content.substring(PREFIX.length).split(' ')
    console.log(args)
    switch (args[0]) {
        case 'create':
            create.execute(message, args)
            break
        case 'ping':
            //Send message for ping and then edit that message to actual ping time
            message.channel.send('Pinging...').then(msg => {
                msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
            })
            break
        case 'help':
            message.channel.send('Help is here!')
            break
        default:
            message.channel.send('Invalid command!')
    }
})

client.login(process.env.BOT_TOKEN)