//JSON.stringify() is used to convert a JavaScript object into a string, json is used to store the data in the form of key/value pairs, and it is a lightweight data storing and exchanging format
//json parse is used to convert the string back to the original object
// JSON is a format for storing and exchanging data. JavaScript objects and arrays are often converted into JSON format to store in localStorage, and then converted back when retrieving it.

document.addEventListener('DOMContentLoaded', () => {
    const todoInput= document.getElementById('todo-input');
    const todoList= document.getElementById('todo-list');
    const addTaskButton = document.getElementById('add-task-btn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || []; //tasks are loaded from localStorage if available, or an empty array is used as the default value.
 
tasks.forEach(task =>renderTask(task)); 

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
    renderTask(newTask);
    todoInput.value=""; //clear the input field
    console.log(tasks);
});
function renderTask(task){
    const li= document.createElement('li');
    li.setAttribute('data-id', task.id); 
    if(task.completed) li.classList.add('completed'); 
//innerHTML is used to get or set the HTML content of an element
    li.innerHTML=` 
    <span>${task.text}</span>
    <button> delete </button>`;

//toggles the completed class on the list item 
    li.addEventListener('click', (e)=>{
        if(e.target.tagName === 'BUTTON')return;
        task.completed = !task.completed;
        li.classList.toggle('completed');
        saveTask(); //updates the local storage
    })

//removes the task from the list
    li.querySelector('button').addEventListener('click', (e)=>{ //e is used to prevent the event from bubbling up to the parent element
        e.stopPropagation(); //prevent event from firing on the parent element
        tasks = tasks.filter(t => t.id !== task.id); //filters out the task that is to be removed by comparing the id and then updates the tasks array
        li.remove() 
        saveTask(); //updates the local storage
    })
    todoList.appendChild(li); //appends the list item to the unordered list
}

function saveTask(){ //used to add to the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    }
})
