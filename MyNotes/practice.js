// function abc(){
//     return "xyz";
// }
// let a =abc();
// console.log(a); 


// function greetuser(){
//     console.log("shar");
// }
// let qwe=greetuser();
// console.log(qwe);
//output undefinded because no return statement, generally we use return for functions and console.log for simple printing
// here we can use greetname() in the end without console or return, it wont give any result but want the functions side effects
// or logics to execute 

// so there are 3 types- calling a function- abc()
//                       returning a function- return "abc"
//                       printing output of function- console.log(abc) if already there is some stored value or else console.log("abc")



// eg- inheritance
// create class user w 2 props- name+email, and it also has a method called viewData() which allows the user to view website data 
let data= "confidential"
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("website data is:", data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
        }
    editData(){
        data= "some new value";
    }
}
let student1= new User("shar","shar@mail.com");
let admin1= new Admin(); 
let admin2= new Admin("admin","admin@college.com"); 
console.log(admin1.editData());
console.log(data); //will give some new value not secret info since its written twice and classes will take the most recent one
console.log(admin1); //values will show undef because values are in admin2 not 1
console.log(admin2);
console.log(student1.viewData());
console.log(student1);
// in output line 46 ANd 50 will show undefined due to missing explicit return function


// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
// Then create another constructor Dog that inherits from Animal using prototypes.
// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal. 


