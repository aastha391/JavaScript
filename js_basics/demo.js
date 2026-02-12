// // // {let a=10,b=10}
// // // console.log(a+b) let is accessible only inside a scope 
//Redefinition not allowed but reassignment allowed
//let a=10
//let a=20//error no redefinition

// // // {var c=10,d=10}
// // // console.log(c+d) no block scope but function scoped or global scoped

function example(){
   var x=10
   console.log(x)
}
example()
//console.log(x) //will show error as var has function scope and when written anywhere outside function than it has global scope 

var age=25//global scope 
if (true){
   console.log(age)
}//var allows reassignment and redefinition

// // //const has block scope 
// const variables can be mutable but they can not be reassigned in acse of objects and array
// // const a=10//const is not mutable 
// // console.log(a)
// // // a=20
// // // console.log(a)
// // //though let and const have same scope they have a difference of mutability

// // let b=10
// // console.log(b)
// // b=20
// // console.log(b)//block scope and mutable 

// // var c=10
// // console.log(c)
// // c=20
// // console.log(c)//no block scope and mutable


// //------------Hoisting(using the value of a variable before initialisation)---------//
// console.log(a)
// var a=10//with var undefined i.e it allows hoisting while let and const shows error


//-----------LOOPS----------//
//while and  do while are odd loops i.e they run based on user input and while is entry conytrolled loop and do while is exit controlled loop
// let a=10
// let i
// for(i=0;i<10;i++){
//     if(a=='5')
//     break;
//     else
//         console.log(a)
// }

//  console.log(5=='5')//true it only checks if both values are same 
//  console.log(5==='5')//(strict equality)false as it checks datatype first 

//--------  DATATYPES----------//
//  let num=10;
//  let str="Hello";
//  let arr=[1,2,3];
//  let obj={name:"Robin",age:10};
//  let a
//  let emp=null
//  let isok=true
//  console.log(typeof (num))//number
//  console.log(typeof (str))//string if double or single quotes
//  console.log(typeof (arr))//object
//  console.log(typeof (obj))//object -key value pair 
//  console.log(typeof (a))//undefine
//  console.log(typeof (emp))//object
//  console.log(typeof (isok))//boolean



//------------FUNCTIONS----------//
 function add(num_1,num_2){
    return num_1+num_2//cannot return more than onre value in function if ew want to than pack it up as an entity
 }
var result=add(2,3)//if we want to use the result of function in future 
console.log(result)
 console.log(add(2,3))

 //PARAMETER AND ARGUMENTS ->arguments are the one that are used during calling a function like in add(2,3) 2,3 are arguments while num1 and num2 are parameters

