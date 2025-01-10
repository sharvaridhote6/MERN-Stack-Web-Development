//dom-
console.log("hello from script");
console.log(document.firstChild.firstChild);
console.log(document.firstChild);
console.log(document.getElementsByTagName("h1"));  
console.log(document);// thsi gives the elements and attributes about the whole page which is converted into an object
console.log(document.body);//this gives us the body of the page
document.body.style.background= "aqua";

console.log(document.getElementById("header"));
//alternate way
let heading= document.getElementsById("header");
console.log(heading);




// bom-
alert("Keep going, you'll make it.");
