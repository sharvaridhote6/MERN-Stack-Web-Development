const todoInput= document.getElementById('todo-input');
const todoList= document.getElementById('todo-list');
const addTaskButton = document.getElementById('add-task-btn');

let tasks = []; //array is used to store the tasks
 
addTaskButton.addEventListener('click', ()=>{
    const taskTest = todoInput.value.trim(); //trim() removes whitespace or extra spaces from both ends of a string
    if(taskTest === "") return;

    const newTask = {
        id: Date.now(), //date now is used to return the number of milliseconds since January 1, 1970. used for fastest and most efficient ways to capture the current time in your code, ensuring that you always get a unique value.
        text : taskTest, //taskTest is the task entered by the user
        completed: false //by default the task is not completed
    };
    tasks.push(newTask);
    saveTask(); //add to the local storage
    todoInput.value=""; //clear the input field
    console.log(tasks);
});

function saveTask(){ //used to add to the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


