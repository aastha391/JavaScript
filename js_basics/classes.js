// class Human{
//     //properties
//     age;//default way m marked public which means they can also be used outside the class
//     height=180//private variable means that can only be used inside the class
//     #weight=60//use # to turn a variable to private 

//     constructor(ne3wAge, newHeight, newWeight){
//         this.age=ne3wAge;
//         this.height=newHeight;
//         this.#weight=newWeight;
//     }
//     //behaviour 
//     //can also make functions private 
//     walking(){
//         console.log(`I am walking with ${this.#weight}`)//this refers to the current called object 
//     }

//     running(){
//         console.log("I am running")
//     }

//     //getter and setter methods to access the private variables outside the class
//     get fetchWeight(){
//         return this.#weight;
//     }

//     set modifyWeight(val){
//         this.#weight=val;
//     }
// }

// let obj=new Human(20,175,65);//even thought height has value 180 but it will print 175 and if we paas weight also than the value of weight will also be changed
// console.log(obj.age)
// console.log(obj.height)
// console.log(obj.fetchWeight)
// obj.walking()



//----------------Default parameters--------------//
function sayName(name="Aastha"){
    console.log("My name is : ",name);
}

sayName("Avani")//will give undefined so in this case we can set default value in function parameters
//after setting default value the function will print the default value aastha whenever no parameter is passed
//But if parameter is passed than the parameter value will be printed


//-------------Multiple default parameters------------//
// function sayname(fname="Preeti",lname="Singh"){
//     console.log("My name is : ",fname," ",lname);
// }

// sayname("Love")



function sayname(fname="Preeti",lname=fname.toUpperCase()){
     console.log("My name is : ",fname," ",lname);
 }

 //sayname("Love")
 //sayname()
 sayname("Love","Babbar")

 //-----------passing object as parameter-------//
//  function solve(value={age:12,wt:80,ht:180}){
// console.log(value)
//  }
//  //solve(14)
//  solve()


//------------passing array as parameter----------//
  function solve(value=["CSS","C++","JAVA","JS"]){
console.log(value)
 }
 //solve(14)
 solve()


 //-------------passing null or undefined in function parameter----------//
 function print(value="Rahul"){
    console.log("Hello ",value)
 }
 print("null")//will print hello null
 print(undefined)//will print the default value


//-------------passing function in parameter----------//
function age(){
    return 18
}

function utility(name="Chirag",age1=age()){
    console.log(name," ",age1)
}

utility()