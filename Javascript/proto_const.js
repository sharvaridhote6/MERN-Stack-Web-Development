// to access prototypes for objects or other things, this way should ideally not be used
let computer= {cpu:12};
let lenovo={
    __proto__:computer
}
console.log(`computer`, computer.__proto__, lenovo.__proto__);//dunder proto, underscores are dunders used to access prototypes


let genericCar={wheels:4}
let tesla={driver:"AI"}
//another newr and better way of writing a prototype
Object.setPrototypeOf(genericCar,tesla)

console.log(`tesla`, tesla); //backticks here is used as aregular string printed as a part of the output, this is used instead of strings as enhanced flexibilty and readibilty,It introduces the concept of template literals, providing us with a more concise and expressive way to construct strings
console.log(`tesla`, Object.getPrototypeOf(tesla)); //using this func we can get access to genericCar's property
console.log(`tesla`,tesla.hasOwnProperty('driver')); //checks if driver is present in tesla fucntion



//CONSTRUCTORS- you can create the blueprints with fucntions in this
//eg1-
function Person(name, age){
    this.name=name// assigns name argument to name property of a function, propertu is before and afetr = is arg
    this.age=age
}



// eg-2 
function Car(make,model){
    this.make=make
    this.model=model
}
let myCar= new Car("toyota","camry")  //make=>toyota, model=>camry
console.log(myCar);

let myNewCar= new Car("Tata", "safari")// newly created object inside a function, this.make/model points here
console.log(myNewCar);
//outputs will be objects since they're key value pairs



//eg-3
function Tea(type){
    this.type=type
    this.describe=function(){
        return `this is a cup of tea ${this.type}` //to access a function inside we use this.type
    }
}
let lemonTea=new Tea("green tea")
console.log(lemonTea);
console.log(lemonTea.describe());//shows the output inside decsribe function ,i.e the return 



// eg-4 we can raise an error using if condition and assining throw exception to it
function Drink(coffee){
    if(!new.target){ //this is defined only if the function is invoked as a constructor w keyw new
        throw new Error("Drink should be called with a new keyw")//if new.target is not defined, this error is thrown
    }
    this.coffee=coffee;
}
let myDrink= new Drink("coffee")
let yourDrink= Drink("tea") //no new keyw hence error thrown
console.log(myDrink);
console.log(yourDrink);


// functions in constructors
function Animal(species){
    this.species=species; //assigns value of species parameter(first species) to the value of the species(second species)
}
Animal.prototype.sound=function(){
    return `${this.species}makes a sound`;
}
let dog= new Animal("dog")
console.log(dog.sound());


//functions used in an object
let car={
    make:"toyota",
    year:2020,
    model:"camry",
    start:function(){
        return `${this.make} ${this.model} was made in year ${this.year}`;
    },
};
console.log(car.start());


//eg5-
function Persons(name, age){
    this.name=name
    this.age=age
}
let Diya=new Persons("Diya", 20)
console.log(Diya.age, Diya.name);

