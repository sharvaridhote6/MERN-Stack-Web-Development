//qs1- write a while loop calculating sum of all numbers from 1 to 5 and stores result in variable named sum
let sum = 0;
let i = 0;
while (i <= 5) {
  sum = sum + i; //sum+=i
  i++;
}
console.log(sum);


//qs2- write a while loop that counts down from 5 to 1 and stores nos in an array named countdown
let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);


//qs3- write a do while loop that prompts a user to enter their favourite tea type until they enter "stop", store each tea type in an aray named teaCollection
//do while- we have to take atleast one prompt from the user complusorily as soon as th prompt starts working 
//unlike the while loop you cannot get started until the condition is met and put first
//explanation- here, "prompt" is not supported by node js, because its a browser thing in js, that's why prompt could be undefined here, we use 'tea' to hold the prompt in the variable 'tea'
//we create an array, check if acc to the while condition, is the user saying stop? as long as it is not stop, then we take the prompt, and if the prompt is not stop, then we push it
//(copy paste the whole thing on console in inspect and type teacollection to see your data)
//instead if we put (tea=== "stop"), even when we enter stop it will give us the op as 1, because the word stop is being pushed in the collection

// let teaCollection=[]
// let tea
// do {
//   tea = prompt(`enter your fav tea(type "stop" to finish)`)
//   if(tea !== "stop"){
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");


//qs4- do while loop, adds nos 1 to 3 and stores result in a var named total
let total=0;
let k=1;
do {
  total= total+k;
  k++;
} while (k<=3);
console.log(total);


//qs5- write for loop that multiplies each element in the array 2,4,6 by 2 and stores results in a new array named multipliedNumbers
let multipliedNumbers=[];
let numbers=[2,4,6];
for(let l=0; l<numbers.length; l++){
  // takeNumbers= numbers[l]*2;
  // multipliedNumbers.push(takeNumbers);
multipliedNumbers.push(numbers[l]*2);
}
console.log(multipliedNumbers)


//qs6- write a for loop that lists all cities in array paris, nyc,tokyo,london and stores each city in a new array named citylist
let cities=["paris","tokyo","new york","london"]
let cityList=[];
for(let m=0; m<cities.length;m++){
  const saveCities= cities[m];//m is taken so that each and every var is saved in the array
  cityList.push(saveCities);
};
console.log(cityList);


//qs7- write a for loop that loops through the given array and stops the loops when it finds chai, store all teasbefore chai in a new array named selectedTeas
//to find each element we use- teatypes[n] (similarly in other cases)
let selectedTeas=[];
let teaTypes=["green tea","black tea","chai","oolong tea"];
for (let n = 0; n < teaTypes.length; n++) {
  if (teaTypes[n]=="chai") {
    break; //stops the loop
  }
  selectedTeas.push(teaTypes[n]);
}
console.log(selectedTeas);


//qs8- write for loop that loops through the array given and skips paris, stores other cities in visitedCities
let cityNames=["london","newyork","paris","berlin"];
let visitedCities=[];
for (let s = 0; s < cityNames.length; s++) {
  if (cityNames[s]=="paris" || cityNames[s]=="Paris") {
    continue; //skips or passes that one element from the array
  }
  visitedCities.push(cityNames[s]);
}
console.log(visitedCities);


//qs9-use "for-of" loop to iterate through array given and stop when number 4 is found, store numbers before 4 in array smallNumbers
// let nos=`[1,2,3,4,5]` //inside the backticks, this is not an array it a plain text representation of an array
let smallNumbers=[];
let nos= [1,2,3,4,5];

for (const num of nos) {
  if (num=="4") {
    break;
  }
  smallNumbers.push(num)
}
console.log(smallNumbers);


//qs10- for of to iterate through array given and skip lipsticks, store other cosmetics in preferredcosmecs
let consmetics=["eyeliner","kajal","lipstick","blush"]
let preferredcosmecs=[]
for (const makeup of consmetics) {
  if (makeup=="lipstick") {
    continue;
  }
  preferredcosmecs.push(makeup);
}
console.log(preferredcosmecs);


//qs11- forin loop to iterate thru an object containing city populations, stop loop when the peopulation of "berlin" is found and store all previpus cities popln ina  new object named "cityPopulations"
// given object, with key and a value 
let cityPopulations={
  "london":890000,
  "nyc":840000,
  "paris": 220000,
  "berlin":350000,
}
let citiesPopulations={};

//console.log(Object.keys(cityPopulations));// syntax to return the keys
//console.log(Object.values(cityPopulations));// syntax to return the values

