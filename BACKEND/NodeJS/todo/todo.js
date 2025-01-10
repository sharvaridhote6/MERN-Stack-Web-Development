const fs = require ('fs');
const filePath= "./tasks.json";

const loadTasks = () => {
    try{
        fs.readFileSync(filePath);
    }catch(error){
        return[];
    }
}
const addTask = (task) => {

}

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
}else if(command === "list"){
    listTasks();
}else if(command === "remove"){
    removeTask(parseInt(argument));
}else{
    console.log("Invalid command");
}