let obj={
    age:12,
    wt:68,
    ht:180
};
let src={
    val:12,
    name:"Aastha"
}

let join=Object.assign({},obj,src);//to join to objects in one 


console.log(join)
console.log(obj)
//dynamic means can change the property of object at runtime 
obj.color="white"
console.log(obj)

let dest={...obj}//cloning of object using spread operator
obj.age=90//to check a clone is created no reference copied
console.log(obj)
console.log(dest)


let obj2=Object.assign({},obj)
console.log(obj2)//cloning of object using assign operator

//Cloning using iteration method
let dest2={}

for(let key in src){
    let newKey=key
    let newValue=src[key]
    //insert newKey and newValue in dest2 and create a clone 
    dest2[newKey]=newValue;
}
console.log(dest2);


//-------------Garbage Collector--------//
 //memory that is not in use can be freed up by garbage collector and prevent memory leak


