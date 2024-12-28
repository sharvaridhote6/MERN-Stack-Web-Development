//async-await(await means pausing the execution of surrounding asynv func until the promise is settled,can be used insiude the async function)
//await - for eg if we're calling a function from whom we know we'll get a promise, if we add await keyweord for that fucntion then it will make 
// sure that every otehr execution in surrounding stops until we get a promise for the awaited function, hence making the otger funcntions wait 
// thsi resolves the problem and gives us a solution for it that when we want to exeute one probelm and only then the other one, then this can be used. 
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200) //200 is generally HTTP success rate, meaning it shows that http has a successful response w a successful requuest
        },2000);
    });
};
async function getWeatherData(){
    console.log("getting data 1...");
    await api(1);//1st call
console.log("getting data 2...");
    await api(2);//2nd call
 console.log("getting data 3...");
    await api(3);

}
getWeatherData();//getweatherdata called

//async-await is a better cleaner and easier way of understanding and writing the code than .then() and .catch()
//IIFE- IMmmediately invoked function expression is a function invoked and used for async await which is immediately 
// called as soon as defined, because in asyn we have to first call the function wjcih is unncessary, this clears out that
//problem, thse are only wrote once and wherever wrote they'rew executed there

//eg- (func)();
 
// (async function (){
//     console.log("getting data 1...");
//     await api(1);//1st call
// console.log("getting data 2...");
//     await api(2);//2nd call
//  console.log("getting data 3...");
//     await api(3);
// })();  (cant use this again, but that's the point, immediate one time execution)

//eg2-
function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name:"sharvari",college: "dyp"})
        },2000);
    });
};
async function getUserData(){
    try{
        console.log("fetching user data...");
        const userData= await fetchUserData();
        console.log("User data:",userData);
        
    }catch(error){
        console.log("Error fetching data:", error);
    }
}
getUserData();



//eg3-
function fetchPostData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("post data fetched")
        }, 2000);
    })
}
function fetchCommentData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("post comment fetched")
        }, 2000);
    })
}
//to grab multiple promises for execution
async function getBlogData() {
    try {
        console.log("fetching blog data");
        // const blogData=await fetchPostData();
        // const commentData= await fetchCommentData();
        // console.log(blogData);
        // console.log(commentData);
        const [postData,commentdata]= await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ]);
        
        console.log("fetch complete");
    } catch (error) {
        console.log("error fetching blog data", error);
    }
}
getBlogData();