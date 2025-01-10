console.log("Hello");
process.stdout.write("hi"); //different and longer way which doesn't give the output ona different line
// process.stdout.write("hi");
console.table({ name: "sharvari" });
console.table({ city: "pune" });

// DATATYPES:
// var score=102 older version
let score = 102;
let name = "Sharvari"; //string
let isLoggedin = true; //boolean

//object
let teaTypes = ["lemontea", "green tea"]; //array
let user = { name: "sharu", city: "pune" };

let getScore = score; //borrowing score value to getscore

console.log(getScore); //102

let gameName = "spiderman";
gameName = "spideyy";
console.log(gameName);

// OPERATIONS:
let addition = 4 + 5;
let subtract = 9 - 3;
let mult = 3 * 5;
let divide = 8 / 2;
let remainder = 9 % 2;
let expo = 2 ** 3; //2 to the power 3 

let myscore = 110;
myscore++;

let credits = 56;
credits--;
// comparison operation
let num1 = 3;
let num2 = 3;
let num3 = 6;

console.log(num1 == num2);
console.log(num1 != num3);
console.log(num1 < num3);
console.log(num1 > num3);

//logical operators
// &&- and
// || -or
// !- reverse

let isloggedin = true;
let ispaid = false;
console.log(isloggedin && ispaid);

let isemailuser = true;
let isgoogleuser = true;
console.log(isemailuser || isgoogleuser);

//assignment ops
let num7 = 10;
num7 /= 7;
num7 += 7;
console.log(num7);
