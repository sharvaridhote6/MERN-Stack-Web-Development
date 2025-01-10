console.log("chaicode");
function sayHello(){
    console.log("Hello there!");
}
setTimeout(() => {
    sayHello();
}, 2000); //meaning 2 secs

for (let index = 0; index < 10; index++) {
    console.log(index);
}

// reasoning of why the different sequencing of outputs are happening is in the javascript file workig in js notes