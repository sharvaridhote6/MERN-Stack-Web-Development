// generator function- showed by *by the function, doesnt execute all at once, it does on a resume basis, meaning we hit it once it'll generate, we hit it again, it'll generate again 
// yield is hitting to get the output from generator

function* numberGenerator(){
    yield 1
    yield 2
    yield 3
}
let gen= numberGenerator();
let gen2= numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value); //this is how you get the output for generators 
console.log(gen.next().value);
console.log(gen.next().value);
//can yeild for 3 times, more than that undef due to no input beyond that
console.log(gen2.next().value);
console.log(gen2.next().value);
//here next is an iterator, it keeps a track of the values and the ones available, keeps going until out of a bound array