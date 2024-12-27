// example 1- make sure to grab the element which you have to change, and only that element changes nothing else, also how can you access the change and it should only 
// happen on a click event, not by any other event

document.querySelector('button');// query selector selecets the given class or whatver mentioned, and queryselectorAll slecets every class/element matching the pattern we put
 //getElementById is seleceted since we gave an id to the button, similarly we can select getelembyClass or getelembyTag
//queryselector- allows to take a single element using css selector, returns the first element matched in the doc
//getelements- uses unique id attributes/class/tags etc and finds in the doc

let hold=document.getElementById("changeTextButton");
console.log(hold);

document
.getElementById('changeTextButton')// element is grabbed to change
.addEventListener('click',function(){ //should use function, brackets include (what event should i listen to,what event should i perform) here performance of what should be done is added
    let paragraph=document.getElementById("myParagraph") //change to what object is shown
    paragraph.textContent = "The paragraph is changed";});  //what change will take place is shown
//here the addeventlistener listens to the click event by id changetextbutton and fucntion is the callback funcn which executes when click event occurs
// the first parameter in addEventListener specifies the event type (click ).
// The second parameter is the function that runs when the event is triggered.
// The function syntax ensures that 'this' correctly refers to the element triggering the event. If you were to use an arrow function (() => {}), it would not give us the 
// context of where it should be pointing, this would not point to the triggering element but it would point to the global this function, meaning it would know which button to 
// trigger the event with, not any other one of the page

 
//example2- to highlight the first city, we have to create a class of highlight of css first under style
document
.getElementById("highlightFirstCity")
.addEventListener("click",function () {
    let cities=document.getElementById("citiesList"); //grabbed the cities
    cities.firstElementChild.classList.add("highlight");//grabbed the first city by traversing
});


//example3- manipulate the dom
document.getElementById("changeOrder").addEventListener("click", function(){
    let coffee=document.getElementById("coffeeType");
    coffee.textContent="Espresso";
    coffee.style.backgroundColor ="brown";
    coffee.style.padding ="3px";
});


//example4- add an item
document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem=document.createElement("li")
    newItem.textContent ="Eggs"
    document.getElementById("shoppingList").appendChild(newItem);
})


//example5- remove task
document.getElementById("removeLastTask").addEventListener("click",function(){
    let tasklist=document.getElementById("tasklist");
    // tasklist.remove(); //removes the whole tasklist
    tasklist.lastElementChild.remove();
})


//example6- event handling 
document.getElementById("clickMeButton").addEventListener("dblclick",function(){
     
})


