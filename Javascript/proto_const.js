// to access prototypes for objects or other things, this way should ideally not be used
let computer= {cpu:12};
let lenovo={
    __proto__:computer
}
console.log(`computer`, computer.__proto__, lenovo.__proto__);


let genericCar={wheels:4}
let tesla={
    driver:"AI"
}
//another newr and better way of writing a prototypr
Object.setPrototypeOf(genericCar,tesla)
console.log(`tesla`, tesla); //backticks here is used as aregular string printed as a part of the output
console.log(`tesla`, Object.getPrototypeOf(tesla)); //using this func we can get access to genericCar's property
console.log(`tesla`,tesla.hasOwnProperty('driver')); //checks if driver is present in tesla fucntion




//CONSTRUCTORS- you can create the blueprints with fucntions in this
//eg1-
function Person(name, age){
    this.name=name// assigns name argument to name property of a function, propertu is before and afetr = is arg
    this.age=age
}



//eg-2 (comment off when executing)
// function Car(make,model){
//     this.make=make
//     this.model=model
// }
// let myCar= new Car("toyota","camry") 
// console.log(myCar);

// let myNewCar= new Car("Tata", "safari")// newly created object inside a function, this.make/model points here
// console.log(myNewCar);
// //outputs will be objects since they're key value pairs



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



//eg-4 we can raise an error using if condition and assining throw exception to it
// function Drink(coffee){
//     if(!new.target){
//         throw new Error("Drink should be called with a new keyw")
//     }
//     this.coffee=coffee;
// }
// let myDrink= new Drink("coffee")
// let yourDrink= Drink("tea")
// console.log(myDrink);
// console.log(yourDrink);


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


//eg
