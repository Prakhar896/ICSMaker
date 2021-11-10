const Discord = require('discord.js');
const ics = require('ics')
const fs = require('fs');

module.exports = {
    name: 'create',
    description: 'Create a new event',
    async execute(message, args) {
        // async function collectInfo(informationName) {
        //     var responseReceived = ""
        //     message.channel.send('Please send the ' + informationName + " of the event")
        //     const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        //     collector.on('collect', response => {
        //         responseReceived = response.content
        //         collector.stop()
        //     })
        //     return responseReceived
        // }

        // async function getInfo() {
        //     var title = ""
        //     var description = ""
        //     var location = ""
        //     var start = ""
        //     var duration = ""
        //     var organizer = ""
        //     for (var informationName of ["title", "description", "date and time in YYYY, MM, DD, HH, MINMIN", "duration in HH, MINMIN", "location", "organizer in NAME, EMAIL, WEBSITE"]) {
        //         await collectInfo(informationName)
        //             .then(response => {
        //                 if (informationName == 'title') {
        //                     title = response;
        //                 } else if (informationName == 'description') {
        //                     description = response;
        //                 } else if (informationName == 'date and time in YYYY, MM, DD, HH, MINMIN') {
        //                     var differentComponents = response.split(', ');
        //                     var dateTimeArray = [];
        //                     for (var component of differentComponents) {
        //                         dateTimeArray.push(parseInt(component));
        //                     }
        //                     start = dateTimeArray;
        //                 } else if (informationName == "duration in HH, MINMIN") {
        //                     var differentComponents = response.split(', ');
        //                     var durationArray = {};
        //                     var index = 0;
        //                     for (var component of differentComponents) {
        //                         if (index == 0 && component != "0") {
        //                             durationArray.hours = component;
        //                         } else {
        //                             durationArray.minutes = component;
        //                         }
        //                         index += 1;
        //                     }
        //                     duration = durationArray;
        //                 } else if (informationName == "organizer") {
        //                     var differentComponents = response.split(', ');
        //                     var newObject = {
        //                         name: differentComponents[0],
        //                         email: differentComponents[1],
        //                         dir: differentComponents[2]
        //                     };
        //                     organizer = newObject;
        //                 } else if (informationName == "location") {
        //                     location = response;
        //                 }
        //             });
        //     }
        //     return { title, description, start, duration, organizer, location };
        // }

        // await getInfo()
        // .then(info => {
        //     console.log(info)
        //     ics.createEvent({
        //         title: info.title,
        //         description: info.description,
        //         start: info.start,
        //         duration: info.duration,
        //         location: info.location,
        //         organizer: info.organizer
        //     }, (error, value) => {
        //         if (error) {
        //             console.log(error)
        //         }
    
        //         fs.writeFileSync(`${__dirname}/event.ics`, value)
        //     })
        // })
    }
}
