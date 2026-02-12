
greet("User")
function greet(name){
    console.log(`Hello ${name}`)//back tick
}
//***NOTE-Normal functions follow hoisting property means u can call function before writing the function
//greet("Aastha")


//----------Function as an Expression--------//
const factorial=function(n){//anonymous function
    if(n==0||n==1)
        return 1;
    else return n*factorial(n-1);
}
console.log(factorial)//shows that it is a function call
console.log(factorial(4));

function fullname(firstname,lastname){
    let fullname=firstname+" "+lastname
    return fullname
}

let name=fullname(7,7)//treats them as string as datatype is not defined
console.log(name)


//------------Objects----------//
let obj={
    name:'Aastha',
    //"full name"="Aastha Sheoran",//if the key has space in between than use double quotes
    age:19,
    weight:60,
    greeting:function(){
        console.log("Hello")
    }
};
console.log(obj.greeting())//along with hello undefined is also printed bcz the console.log statement returns what the function returns not what is written inside it and as th function returns nothing so it prints undefined
//obj.greeting(); this will print only hello

//let obj2=obj//it creates shallow copy of obj i.e only the refernce is copied no new object is created  

//-------SHallow Copy--------//
let obj1 = {
  name: "Aastha",
  address: { city: "Delhi" }
};

let obj2 = { ...obj1 };   // shallow copy
obj2.name = "Riya";
console.log(obj1.name); // Aastha ✅

obj2.address.city = "Mumbai";
console.log(obj1.address.city); // Mumbai 😟
//shallow copy not safe for nested objects

//-------Deep Copy------//\
let obj3 = {
  name: "Aastha",
  address: { city: "Delhi" }
};

let obj4 = structuredClone(obj1); // deep copy
obj4.address.city = "Mumbai";

console.log(obj3.address.city); // Delhi ✅


//-------------Hoisting---------//
//let and const doen not allow hoisting 

/*console.log(marks)
let marks=100*/  //this area has temporal dead zone because we can not access the value of marks until this line and same goes with const 
