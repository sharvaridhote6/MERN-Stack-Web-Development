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


//qs7- write a for loop that loops through the array 
