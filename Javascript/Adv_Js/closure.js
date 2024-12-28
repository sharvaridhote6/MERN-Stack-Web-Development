// basically func + lexical environment(references)= closure, gives access to outer function's scope from inner function
// (scope)- determines the acccessibilty of the variables, objects, functions from different parts of th code
//  these are functions and they remember the environamnet in which they were created
// they are special funcs in which any func is created it retains the memory of the function 

//eg1
function init(){
    let name="VsCode";
    function displayName(){
        console.log(name);
    }
    return displayName();
}
init();

//eg2
function outers(){
    let counter=4;
    return function(){
        counter++;
        return counter;
    };
}
let increment =outers();
console.log(increment());
console.log(increment());
console.log(increment());

//eg3
function outer(){
    let username="shar"
    function inner(){
        console.log("inner",username);   
    }
    inner();
}
outer();
console.log("too outer",username);

//basically there's one fucntion inside that there's second func and the variable outside of both these functions can be 
// accessed by the inner/inside wala function (hence showing the lexical scope)
// if there are 2 functions inside the parent function, then the variables from parent can be accesed by both childern
// but the vars from one child wont be accesible to other child, meaning betwn 2 functions no inner scope which can be accesed 
// similarly that same variable won't be accessible to parent either, nor parent neither the other sibling, only to that one child. 

//eg4
function makeFunc(){
    let name="mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName; //this has access to inner +outer both functions
}
let myFunc= makeFunc();
myFunc(); 

//practical example- suppose you want 100 buttons which on click should change the bg acc to their color
function clickHandler(color){
    return function(){
        document.body.style.backgroundColor=`${color}`
    }
}
document.getElementById("orange").onclick=clickHandler("orange")
document.getElementById("green").onclick=clickHandler("green")