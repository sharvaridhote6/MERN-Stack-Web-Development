// common js export method- kind of older, in this we write all teh functions first and then export them all at once at the end, then consumption is shown in
// appCommonJs, these are loaded synchronously only 

// named export 
function add (a,b){
    return a+b
}
function subtract (a,b){
    return a+b
}
function multiply (a,b){
    return a+b
}
module.exports={
    add, subtract, multiply
};