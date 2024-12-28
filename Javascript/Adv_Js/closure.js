// basically func + lexical environment(references)= closure, gives access to outer function's scope from inner function
// (scope)- determines the acccessibilty of the variables, objects, functions from different parts of th code
//  these are functions and they remember the environamnet in which they were created
// they are special funcs in which any func is created it retains the memory of the function 

function init(){
    var name="VsCode";
    function displayName(){
        console.log(name);
    }
    return displayName();
}
init();



function outer(){
    let counter=4;
    return function(){
        counter++;
        return counter;
    };
}
let increment =outer();
console.log(increment());
console.log(increment());
console.log(increment());

