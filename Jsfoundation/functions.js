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
function greet() {}
const greet = () => {}; //another way of function
//() => {} this is an unnamed fucntion

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalcost = calculatetotal(499 * 100); //storing the result in
