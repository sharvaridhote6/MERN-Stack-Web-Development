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
class Bankaccout{
    #balance= 0; //hash means it wont be able to access by anyone outside this class, only inside though

    deposit(amount){
        this.#balance +=amount //balance= balance+amount
        return this.#balance;
    }
    getBalance(){
        return `${this.#balance}`
    }
}
let account = new Bankaccout();
console.log(account.getBalance());



//Abstraction
