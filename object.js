const mySym =Symbol("Key1")

const obj ={
    name: "Aastha",
    [mySym]:"Key1",
    age: 18,
    email: "aastha@gmail.com"
}


console.log(mySym)
console.log(typeof mySym)

obj.email="aastha@google.com"
console.log(obj["email"])
//Object.freeze(obj)//no changes can be made in object
obj.email="aastha@microsoft.com"
console.log(obj["email"])

obj.greeting=function(){
    console.log("Hello")
}

obj.greetingtwo=function(){
    console.log(`Hello ${this.name}`)
}

console.log(obj.greeting())
console.log(obj.greetingtwo())

const jsuser= new Object()//Singleton object
const js={}//non singular object

const obj1={1:"a" , 2:"b"}
const obj2={3:"c" ,4:"d"}
//const obj3=Object.assign({},obj1,obj2)//parenthesis optional
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(obj))//keys of object in form of array
console.log(Object.values(obj))
console.log(Object.entries(obj))//each key value in form of array

console.log(obj.hasOwnProperty('name'))


//Destructuring of object
const course={
    coursename:"js",
    price:  "990",
    courseInstructor:"hitesh"
}

const{price:pr}=course//can change the name of object
//console.log(price)
console.log(pr)








