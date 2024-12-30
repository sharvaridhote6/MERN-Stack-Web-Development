// PRIMITIVE DATAYPES
// string, boolean,numbers, null,undefined, symbol

//number-
let balance = 12;
console.log(typeof balance); //typeof used for showing which data

//boolean
let isActive = true;
console.log(typeof isActive);

//null and undefined
let firstname;
let secondname = null;
console.log(firstname); //undef because no value assigned to the var
console.log(secondname); //null

//strings
let isstring = "yey";
let mystring = `hey`;
let yourstring = "sharvari";
let evastring = isstring + " " + "hey" + " " + yourstring;
console.log(typeof isstring);
console.log(evastring);

let message = `hello ${yourstring}`; //string interpolation
console.log(message);
let demo = `value is ${2 * 2}`;
console.log(demo);

let sm1 = Symbol("xf");
console.log(sm1);

let sm2 = Symbol();
let sm3 = Symbol();
console.log(sm3 == sm2); //false cause syms are diff

let sym = Symbol("foo");
let symb = Symbol("foo");
console.log(sym == symb); //even the same inputs don't match

//NON-PRIMITIVE DS
//objects-arrays, functions

const username = {
  firstname: "sharvari",
  isLoggenin: true,
}; //curly bracs are itself objs
console.log(username); //displays everything inside it
console.log(username["firstname"]); //sharvari
console.log(username.firstname); //sharvari
console.log(typeof username); //obj

//Arrays
let demos = ["a", "b", true]; //diff ds are accepted in arrays
//array indexing-
console.log(demos[(0, 1)]); //will return the value of the last operand incase of comma
console.log(demos[0], demos[1]); //gives output normally for more than one values
console.log([demos[0], demos[1]]); //gives output in array format
console.log(1 + "1"); // never rely on js implicit version as it considers that if one is string other might be too

let isValue = "2abc";
console.log(Number(isValue)); //op will be NaN which means- not a number
console.log(typeof Number(isValue));


// to find the type of the data
let score=33;
let marks="33";
let data= "33abc";
console.log(typeof score); //number
console.log(typeof marks); //string
 
// conversion of string to number
let value=Number(marks)
console.log(typeof value); //changed to number
let value1= Number(data)
console.log(value1); // NaN -not a number
console.log(typeof value1); //string

// console.log(booleanABC)- for booleanABC w following values
// true=>1, false=>0, ""(empty string)=> false, "some string" =>true 