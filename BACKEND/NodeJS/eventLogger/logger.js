const fs= require ('fs');
const os = require('os');
const eventEmitter= require('events') //importing the event module

class Logger extends eventEmitter{ //creating a class that extends the eventEmitter class
    log(message){
        this.emit('message',{message})//emit means to send out a message
    }
}

console.log=new Logger();
const logFile= './eventLog.txt';//creating a file to store the logs

const logToFile= (event)=>{ //function to log the message to the file
    const logMessage= `${new Date().toISOString()} - ${event.message}`; //toisostring converts the date to a string
    fs.appendFileSync(logFile, logMessage); //appending the message to the file
}

logger.on('message', logToFile); //listening for the message event and calling the logToFile function


