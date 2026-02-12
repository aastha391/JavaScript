const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

 user.welcomeMessage()
 user.username = "sam"
 user.welcomeMessage()

 console.log(this);//empty object if we print only this

 /*function chai(){
    let username = "hitesh"
     console.log(this.username);
 }

 chai()*/

 const chai = function () {
     let username = "hitesh"
     console.log(this.username);
 }

//const chai =  () => {
    //let username = "hitesh"
    //console.log(this.username);
//}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 (implicit return)

// const addTwo = (num1, num2) => ( num1 + num2 )

//const addTwo = (num1, num2) => ({username: "hitesh"})


//console.log(addTwo(3, 4))


 //const myArray = [2, 5, 3, 7, 8]

 //myArray.forEach()



 //************************IIFE*******************************
 // Immediately Invoked Function Expressions (IIFE)


(function hello(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//to run code immediately and to prevent pollution from global scope







/*javascript execution context
js is single threaded
1. global execution context
2. function execution context
3. eval execution context

code runs in two phases 
1.memory creation phase
2.execution phase
*/