//checking if the number is greater or not
let num1=3
let num2=5
if(num1>num2){
    console.log("num1 is greater than num2");   
}
else{
    console.log("num1 is smaller than num2");
    
}

//checking if the string is equal to another string or not:
let username="sharvari"
let username2="dhote"
if(username==username2){
    console.log("they are equal");
}
else{
    console.log("they are not equal");
}

//checking if a var is a number or not
let score=33
if(typeof score === 'number'){
    console.log("yes its a number")
}
else{
    console.log("nope wrong");
}


//cheking if a boolean val true or false
let value=false
if(value){ //no condition since its only t/f, and value is alr defined as false, so we just check what it is and give op accordingly
    console.log("right");
}
else{
    console.log("wrong");
}

//check if array is empty or not
let isValue=[]
console.log(isValue.length);//0

if(isValue.length== 0){
    console.log("emppty");
}
else{
    console.log("not empty");   
    
}
