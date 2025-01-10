
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success =true;
            if (success){
                resolve("Data successfully resolved")
            }
            else{
                reject("error")
            }
        }, 2000);
    });
}
fetchData()
.then((data)=> {
    console.log(data);
    return("Sharvari")
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});
//basically code execution so async js can execute, so whatever you do will be executed in the the bg, it then notifies us with the result, resolve or reject
// if there are 2 or more programs w setTimeout 5000 each, both will show result at 5 secs each only, at the same time
// promise is always created by a keyword new, promise(), then it takes a callback which takes 2 params, in this case resolve and reject, and whatever we pass to them can be captured by then and catch resp, 
// promises is an object, a solution to callback hell, resolve, reject are 2 callbacks provided by js, it is the eventual completion of a task(shows that the task is completed by eitehr resolving it or rejecting it)
// has 2 properties- state/result, now state can either be fulfiled or rejected, and result can either be resolved or rejected, 3 states- pending/fulfilled/rejected 
// promises runs all the code lines parallelly  

//flow-  
//  function abc(){
//     return new promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             condition for which timeout will happen
//         },4000);
//     });
//  };
// let promise= getPromise();
// promise.then((resolve)=>{
//     console.log("promise fulfilled");
// })
// promise.catch((reject)=>{
//     console.log("rejected");
// })


//promise chaining
function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data1"); //setTimeout prints this 
            resolve("success");
        }, 3000);
    })
}

function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data1"); //setTimeout prints this 
            resolve("success");
        }, 3000);
    })
}
console.log("fetching data1");//this will get printed first, then setT, which resolves success hence it goes to p1 where resolve gets printed (i.e.success )
let p1=asyncFunc1();
p1.then((resolve)=>{
    console.log(resolve);
    console.log("fetching data2");
    let p2=asyncFunc2();
    p2.then((resolve)=>{
         console.log(resolve);
    })
});
//alternate console for better understanding- 
console.log("fetching data1");//this will get printed first, then setT, which resolves success hence it goes to p1 where resolve gets printed (i.e.success )
asyncFunc1().then((resolve)=>{
    console.log("fetching data2");
    asyncFunc2().then((resolve)=>{})
});
//chaining means the inside a then, nested then
// in this above example, fetching of data1 is done before data2, its done one after other


