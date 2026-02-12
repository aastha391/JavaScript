
// arr=[1,2,4,56,7]
// let i
// for(i=0;i<5;i++){
//     if(arr[i]%2==0)
//         console.log(arr[i])
// }


//-------------const in obj and array---------//
// const person={key:"Hello"}
// console.log(person.key)
// person.key="Bye"//const is mutable but does not allow reassignment(objects and array)
// console.log(person.key)

// const arr=["HTML","CSS","JS"]
// console.log(arr)
// arr.push("PYTHON")
// console.log(arr)



// const sales="Toyota"
// function carType(name){
//     return name==="Honda"?name:"Sorry we dont sell this car"
// }

// const car={carn:"City",getCar:carType("Ciaz"),Special:sales}//object key can have function call or other variable call as values as well
// console.log(car.carn)
// console.log(car.getCar)
// console.log(car.Special)



//----------FOR EACH LOOP-----------//
// const color=["Red","Black","White"];
// color.forEach((i)=>console.log(i));//i collects the value bought by the loop 

// //-----to add three to each value of array using for each loop------//
// const arr=[1,2,3,4,5]
// arr.forEach((i,a)=>{//i is for value and a is for index of the array
//    arr[a]=i+3
// })
// console.log(arr)



//--------FOR IN LOOP(usually we use to work on indexes and objects)---------//
const color=["Red","Black","White"];
for(const i in color){//i is the index variable 
    console.log(i,color[i])
}

//----to add three to each value of actual array using for in loop
const arr=[1,2,3,4,5]
for(const i in arr){
    arr[i]=arr[i]+3
}

console.log(arr)

//for in loop in objects 
const user={name:"Robins",age:25,Hobby:"Coding"}
for(const index in user){
    console.log(index,user[index])//cannot use . as we use dot if it refers to a key of the object but there is no key named as index
}

//------------FOR OF LOOP(to work on arrays)---------//
const language=["HTML","CSS","JS"]
for(const i of language){//i is not for index it directly stores the value at the index 
    console.log(i)
}

//***Note:for in for index and for of for values***//


//-----------Operators----------//
//logical operators
console.log(false || true || false);
console.log(false||'Babbar');
console.log(false || 7 || false || 6);//short circuiting->once found truthy value than no need to check further

console.log(2 & 5);
console.log(2 | 5);
console.log(~(0));
console.log(2^2);//xor with same number returns zero
console.log(10>>1);//left shift meand divide by 2 
console.log(10<<1);//rightshift means multiply by 2

//-----------Conditional statements-----------//
let number=5

if(number==1){
    console.log('A')
}
else if(number==2){
    console.log('B')
}
else if(number==3){
    console.log('C')
}
else if(number==4){
    console.log('D')
}
else if(number==5){
    console.log('E')
}//else part is optional


//switch case
let num=3
switch(num){
    case 1: console.log("A");break;
    case 2: console.log("B");break;
    case 3: console.log("C");break;
    case 4: console.log("D");break;
    case 5: console.log("E");break;
}



//-----------String--------//
let name="Aastha"
let name2='Aastha'

let name3=`Aastha
Sheoran`
console.log(name3);

let s=new String("Aastha")//object created 
console.log(typeof(s))

//String Concatenation
let op1='English '
let op2='Hindi '
console.log(op1+op2)

let ans=`${op1}and ${op2}`;
console.log(ans)

//length of string 
console.log(op1.length)

//uppercase and lowercase
console.log(op1.toUpperCase())
console.log(op2.toLowerCase())

//substring method
let str="Babbar"
console.log(str.substring(2));
console.log(str.substring(1,5));//last index runs one element less means it will run only till 4

//split method
let sentence ='hello how are you'
let words=sentence.split(" ")
console.log(words)

let sentence2 ="hello \"how\" are you" //we can not use same type of quotes inside same type of quotes so we use backslash
console.log(sentence2)

let line="kese \\ho \\sab"
console.log(line.split("\\"))

console.log(words.join(','))//join method 
