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
