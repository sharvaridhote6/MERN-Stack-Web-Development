// lets suppose we write 10 lines of code, but on the 4th line we get an error, due to this js won't be able to print the other remaining 6 lines as well even tho they're 
// error free, to fix this we use try catch method wherein the try block has the error code and the catch block handles the error in that code, generally these are used in
// places where predicted id that code can be wrong, so it basically says that don't evacuate the error first acknowlege it (w try block) and then give it in console(catch)
// hence in output we see something similar to err which isn't actually err but it is a console log statement, if there is no error in try then catch not exe
// eg1-
let a=4;
let b=3;
console.log(a+b);
console.log(a+b);
console.log(a+b);
try {
    console.log(a+c); //c is the error here
} catch (error) { //or (err)
    console.log(error);
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b); 


