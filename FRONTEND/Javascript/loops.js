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
  berlin:350000,
  "nyc":840000,
  paris: 220000,
}
let citiesPopulations={};

//console.log(Object.keys(cityPopulations));// syntax to return the keys
//console.log(Object.values(cityPopulations));// syntax to return the values
// for(const city in cityPopulations ){
//   //key value
//   citiesPopulations[city]=cityPopulations[city];
// }
// console.log(citiesPopulations);

//to check for a condition acc to qs
for (const city in cityPopulations){
  if (city=="berlin") {
    break;
  }
  citiesPopulations[city]=cityPopulations[city];
}
console.log(citiesPopulations);


//qs12-forin thru obj containing city populations skip any city w popln below 3 mil and store rest in a new obj named largeCities
let worldCities={
  "sydney":5000000,
  tokyo:9000000,
  berlin: 3500000,
  "paris":2200000
};
let largeCities={};
for(const bigCity in worldCities){
  if (worldCities[bigCity]<3000000) {
    continue;
  }
  largeCities[bigCity]=worldCities[bigCity];
}
console.log(largeCities);


//qs13- for each loop- iteraties thru array given and stops the loops when chai is found and stores all previous teas in newTeas
let newTeas=[]
let teas=["earl grey","green tea","chai","oolong tea"]
teas.forEach(function(tea) {  //here tea is used ofr every iteration, every time while iterating this tea will be assigned to every element in the array
  if (tea=="chai") {
    return; //skips that element
  }
  newTeas.push(tea);
});
console.log(newTeas);


//qs14- foreach iterating through array given, skip sydney and store other cities in array travelCities
let places=["berlin","tokyo","sydney","paris"]
let travelCities=[]
places.forEach(function(place) {
  if(place=="sydney"){
    return;
  }
  travelCities.push(place);
});
console.log(travelCities);

//OR

places.forEach((place) => {
  if (place=="sydney") {
    return;
  }
  travelCities.push(place)
});
console.log(travelCities);


//qs15- write for loop iterating through array given, skip alue 7 and multiply rest by 2, store results in new array "doubledNumbers"
let number=[2,5,7,9]
let doubledNumbers=[]
for (let a = 0; a < number.length; a++) {
  if (number[a]=="7") {
    continue;
  }
  doubledNumbers.push(number[a]*2);
}
console.log(doubledNumbers);



//qs16- forof loop iterating through array given, stop when length of current tea name is >10, store teas in shortTeas
let teaNames=["green tea","black tea","jasmine tea","lemon tea"]
let shortTeas=[]
for (const Tea of teaNames) { //here we have to find the length of each string, so using "Tea" for every element and determining its length we can get the job done
  if (Tea.length>10) {
    break;
  }
  shortTeas.push(Tea);
}
console.log(shortTeas);
