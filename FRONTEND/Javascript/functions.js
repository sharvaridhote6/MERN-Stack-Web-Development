// write a function 'makeTea' that takes one parameter 'typeOfTea' and returns a string like '"making green tea"' when called with '"green tea"' store result in a var 'teaOrder'
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`; //returns and nothing after this gets considered
  console.log(greet); //wont get printed
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder); //was not asked to print in the question



//question2-(js exectution context) create a function named ordertea that takes param teatype,inside that create another func confirmorder that returns msg -order confirmed for tea, call confirmorder from within ordertea and retur the result
function orderTea(teaType) {
  function confirmOrder() {
    return `order confirmed for tea`;
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);



//qs3-(arrow function) write an arrow function named calculatetotal that takes twp parameters price and quantity, the function should return the total cost by multipyling these 2,store result in var named totalcose
// function greet() {}         // regular func
// const greet = () => {};     //arrow function
//() => {} this is an unnamed fucntion

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };
// let totalcost = calculatetotal(499 * 100); //storing the result in totalcost



//qs4- write function named processTeaOrder that takes another function myTea as a parameter and calls it w argument earl-grey, retyrn reault of calling make tea
function myTea(typeOfTea){
  return `myTea: ${typeOfTea}`
}
function processTeaOrder(teaFunction){
  return teaFunction("earl grey")
}
let order= processTeaOrder(myTea) //this is held in a var order, here makeTea is a function since its declared above already, hence using function as a parameter
console.log(order);
//typeoftea and teafunction are placeholders they can be anything , generally named as fn
//from line 42 the control is getting passed on to line 38,teafunction will take makeTea, so there the makeTea gets passed on, and this time parameter of makeTea is being called w the param of earl grey, and earl grey will be passed on to typeoftea 
//line 36 shows that maketea is making the call 


//qs5- write a function named createTeaMaker that returns another func, retured funcn should take 1 param teastype and return message like Making green tea, store returned funcn in var named Teamaker and call it w green tea
function createTeaMaker(){
  return function(teaType){
    return `Making $(teaType)`;
  };
};
let Teamaker= createTeaMaker()
// console.log(Teamaker); //shows what the teamaker is holding- [Function (anonymous)]
console.log(Teamaker("green tea")); //in both these cases we're passing an argumenet as green tea below
//OR
let result=Teamaker("green tea")
console.log(result);

