const fs= require('fs');
const filePath = './tasks.json';

const loadTasks = ()=>{
    try { //try block is used to handle the errors
        const dataBuffer= fs.readFileSync(filePath) //reads the file
        const dataJson= dataBuffer.toString()//converts to string
        return JSON.parse(dataJson)//converts to JSON object
    } catch (error) {//if the file is not found or any other error occurs
        return[] //missing or broken file will return an empty array
    }
}

const saveTasks= (tasks)=>{
    const dataJson= JSON.stringify(tasks)//converts to JSON string
    fs.writeFileSync(filePath, dataJson)//writes to the file
}

const addTask= (task)=>{
    const tasks= loadTasks()
    tasks.push({task})
    saveTasks(tasks)
    console.log('Task added')
}

const command = process.argv[2]//process.argv contains cmd line args
const argument = process.argv[3]

if(command === 'add'){
    addTask(argument)
}else if(command === 'list'){
    listTasks()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log('Invalid command')
}
