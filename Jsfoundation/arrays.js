//declare array named teaflavors that consists the following and access first element of the array and store it in var named firstTea 
let teaFlavors=["green tea", "black tea", "oolong tea"]
let firstTea=teaFlavors[0]
console.log(firstTea);

let cities=["London","Tokyo","Paris"]
let favouriteCity=cities[2]
console.log(favouriteCity);
 
//array-chai types, change secodn elemnet to jasmine tea
let teaTypes=["herbal Tea","green tea"]
teaTypes[1]="jasmine tea"
console.log(teaTypes);
 
//add berlin to the array using the push method
//1 way-
// let city=["mumbai","sydney"]
// city[city.length]="berlin"
// console.log(city);

//2nd way-
let city=["mumbai","sydney"]
city.push("berlin")
console.log(city)

//remove last element using pop method and return it with var named last order
let teaorders=["matcha","iced tea","earl grey"]
teaorders.pop("earl grey")//even () can do since it automatically removes the last element
const lastorder=teaorders.pop()
console.log(teaorders);
console.log(lastorder);
//here ear grey is popped, then w the next line iced tea is also popped and returned the value with lastorder

//create a soft copy
let popularteas=["green tea","lemon tea"]
let softcopyteas=popularteas
console.log(popularteas);
console.log(softcopyteas);

//create a hardcopy
let topcities=["singapore","new york"]
let hardcopycities=[...topcities]
console.log(hardcopycities);

//merge 2 arrays
let europeancities=["paris"]
let asiancities=["tokyo"]
let world= europeancities.concat(asiancities)
console.log(world);

//find length and store it in a var
let books=["mountain","destiny","subconscious"]
let booklength=books.length
console.log(booklength);

//check if there is a val in a var
let woo=["hoo"]
let yea=woo.includes("hoo") 
console.log(yea);


