// consumption of common js
// got the reference of the object and named it as mathoperations
// this "require" keyword is used to import certain files through commonjs, eg- let fs= require ("fs"), or import http from "https" this fs file is 
// imported and now we can access its functionalities


const mathOperations= require("./commonJs.js")
console.log(mathOperations.add(2,2));
