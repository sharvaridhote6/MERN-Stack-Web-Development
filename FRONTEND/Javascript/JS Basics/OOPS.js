//prototypal chain-main idea is to access the whole chain and also inject our own methods  
function Animal(type){
    this.type=type
}
Animal.prototype.speak= function(){
    return `${this.type} makes a sound`
}

Array.prototype.sharvari= function(){
    return `Custom method ${this}`
}
let myArray=[1,2,3,4]
console.log(myArray.sharvari());




//CLASS AND INHERITANCE
//eg1-
class Vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends Vehicle{
    drive(){  //method defined inside derived class
        return `${this.make}: this is an inheritance eg`
    }
}
let myCar= new Car("kia","seltos"); //object is created and called using new keyw
console.log(myCar.start());// both consoles are imp to call as there are methods in both classes and we want return statements to print
console.log(myCar.drive());// drive is a method of Car, hence that is used because it can access its own + parent class methods and properties
//here the outputs of returns are getting printed through console log
                       //(make,model)
let Vehicle1= new Vehicle("kia","seltos");
console.log(Vehicle1.make, Vehicle1.model);
//prints 3 things- first return(console1), second return(console2), console.log 3



//eg2-
class Person{
    constructor(name){
        this.species="homo sapiens";
        this.name=name; //this will be undefined until we give some name after the child section similar to chem
    }
    eat(){
        return`eat`;
    }
    sleep(){
        return `sleep`;
    }
}
class Engineer extends Person{
    constructor(name){
        super(); // if we;re creating a constructor in derived class, we have to use super keyw in order to make it work w/o error
        //used to invoke parent's class const
    }
    work(){
        return`works`;
    }

}
let human= new Engineer();
let p1= new Person("homo sapiens","chem", "sharu");
let e1= new Engineer("homo sapiens","chem", "sharu");
console.log(e1);// all properties of perosn will given to engineer and it will print everything which eng has
console.log(p1);
console.log(human.sleep);
console.log(human.eat);
//flow of this problem-
//first we enter child constructor,when we enter e1 new engg, we go to child ones, then when super is invoked we enter parent const and print whatever there is 
//operation or anything in that block of code, then we'll again come back to child code and execute all the necessaries and exit child const , and in the output all the 3 name,
//species and branch won't get printed since every property is not there in both the classes



//ENCAPSULATION
class bankAccount{
    #balance= 0; //hash means it wont be able to access by anyone outside this class, only inside though

    deposit(amount){
        this.#balance +=amount //balance= balance+amount
        return this.#balance;
    }
    getBalance(){
        return `${this.#balance}`
    }
}
let account = new bankAccount();
console.log(account.getBalance());
// The # symbol before the variable name makes it private in JavaScript

 

//Abstraction-
class coffeeMachine{
    start(){
    return`Starting the machine..`
    }
    brewCoffee(){
        return `brewing coffee`
    }
   
pressStartButton(){
    let msg1=this.start();
    let msg2=this.brewCoffee();
    return `${msg1}+${msg2}`
}
}
let myMachine= new coffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton()); // will show undefined because we didn't store the return values anywhere and directly called them, if we cancel out the let msg1/2 vars and only go w this. keyw
console.log(myMachine.pressStartButton());



// polymorphism
class bird{
    fly(){
        return `flying...`
    } 
}
class penguin extends bird{
        fly(){
            return`penguins can't fly`;
        }
    }
let Bird= new bird();
let Penguin= new penguin();
console.log(Bird.fly());
console.log(Penguin.fly());



// static method- these are special methids which can only be called by the class itself, cannot be accessed by instances of the class, they're directly accessed on the class
class calculator{
    static add(a,b){
        return a+b
    }
}
// let minicalc= new calculator();
// console.log(minicalc.add(2,3));
console.log(calculator.add(2,3));



// // getters and setters- WE DO NOT RETURN SETTERS, AND GETTERS ARE ALWAYS RETURNED
//  this gives controls over accessing the variable, or adding value to a var
// get,set takes the parameters of constructor and uses them as methods, and its necessary to define both together
// getter is used to get value of class from outisde and setter is it to set it 
class employee{
    constructor(name,salary){
        this.name=name;
        this._salary=salary
    }
    get salary(){ //whole idea behind this is what we waant to do when we get and set the salary
        return `you are not allowed to see this salary`;
    }
    set salary(value){ //there's always a value in setter since its literal job is to set
        if (value<0) {
            console.error("invalid salary")
        }else{
            this._salary=value;
        }
    }
}
let emp= new employee("alice", 5000);
console.log(emp._salary); //allowed (js flaw)
console.log(emp.salary); //not allowed


// eg2-
class user{
    constructor(password,email){
        this.password=password;
        this.email=email;
    }
    get password(){
        return `${this._password}.Sharvari` //due to this function we will get o/p in uppercase
    }
    set password(value){
        this._password= value//.toUpperCase() this can be removed because while getting the user will get access to upper case value only,although while setting it wont be the same, matlab setting is done w actual value but that value when accessed by getter its turning into uppercase  
    }
}
const hitesh=new user("shar","123")
console.log(hitesh.password);
// issue here is that we're trying to set password value in setters and constructor both, hence to solve it, create a new variable by underscore, hence overwritting the password

