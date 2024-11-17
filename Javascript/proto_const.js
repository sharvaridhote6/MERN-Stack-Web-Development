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





//CONSTRUCTORS-
