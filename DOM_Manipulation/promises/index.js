// let firstpromise=new Promise((resolve,reject)=>{
//     console.log("Hello");
//     //resolve(1001);
//     reject(new Error("Internal Server error"));
// });


// function sayName(){
//     console.log("Aastha")
// }

// setTimeout(function sayName(){
//     console.log("Aastha")
// },5000);

// let promise1=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Promise fulfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// })

// promise1.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// })


//---Multiple then
// promise1.then((message)=>{
//     console.log(message);
//     return "Message 2 fulfilled";
// }).then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// }).finally((msg)=>{
//     console.log("I'm finally");
// })

//----To handle multiple promises
let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})

let promise3=new Promise((resolve,reject)=>{
    setTimeout(reject,4000,"Third");
})

//new promise created and it will be marked resolve if all the promises inside it are resolved
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log(error);
})//order of value depend on the order in which the promise is sent

