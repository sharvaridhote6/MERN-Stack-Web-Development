//  these are functions and they remember the environamnet in which they were created
// they are special funcs in which any func is created it retains the memory of the function 
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

