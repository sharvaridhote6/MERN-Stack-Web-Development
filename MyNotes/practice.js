function abc(){
    return "xyz";
}
let a =abc();
console.log(a); 


function greetuser(){
    console.log("shar");
}
let qwe=greetuser();
console.log(qwe);
//output undefinded because no return statement, generally we use return for functions and console.log for simple printing
// here we can use greetname() in the end without console or return, it wont give any result but want the functions side effects
// or logics to execute 

// so there are 3 types- calling a function- abc()
//                       returning a function- return "abc"
//                       printing output of function- console.log(abc) if already there is some stored value or else console.log("abc")