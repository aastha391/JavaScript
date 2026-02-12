let arr=[1,2,'Aastha',true]
let brr=new Array('Hello',1,true)//constructor way to create array
console.log(brr)
brr.push("Aastha")//insert at end
console.log(brr)
brr.pop()//remove from end
console.log(brr)

brr.shift();//remove from starting
console.log(brr)
brr.unshift("Megha")//insert at starting
console.log(brr)
brr.push(30)
brr.push(40)
brr.push(60)
console.log(brr)
console.log(brr.slice(0,3));//to create shallow copy of some part of array

brr.splice(0,1,'kunal')//context changes like update delete this one is deleting one item 
console.log(brr)  
brr.splice(1,0,'Aastha')
console.log(brr)//this one will add an element at 1 index without deleting anything 

 //map function
 let a=[1,20,3,40];
 a.map((number)=>{
    console.log(number*number);
 })

 let ans=a.map((num)=>{
    if(num%2==0){
        return num*num
    }//if we dont return anything for some value in map than it returns undefined
 })
 console.log(ans)

 a.map((num,index)=>{
    console.log(num);
    console.log(index);
 })

 //filter function
 let result=a.filter((num)=>{
    if(num%2==0)
        return num;
 })
 console.log(result)


 let array=[1,2,'preeti','rashi']
 let answer=array.filter((val)=>{
    if(typeof(val)==='string')
        return val
 })
 console.log(answer)


 //Reduce function
 let b=[10,20,30,40]
 let ans_=b.reduce((acc,curr)=>{//it will give the sum of all elements of array
    return acc+curr;
 },0);//0 here means that we assigned zero to accumulator so curr starts from 1
 console.log(ans_);


 //sort function
 let c=[23,56,10,34]
 c.sort()
 console.log(c)

 c.sort((a,b)=>b-a)//descending order sorting
 console.log(c)

 //index of method
 console.log(c.indexOf(10))

 //find method
 let d = [10, 21, 30, 41, 50];

let result2 = d.find((num) => num % 2 !== 0);//it will return the first value that will satisfy the condition and if no value satisfies than it returns undefined

console.log(result);


//-----Arrays with functions-------//
let ar=[1,3,4,5,2,6]

let output=function summation(arr){
    let sum=0
    let len=arr.length
    for(let index=0;index<len;index++){
        sum+=ar[index]
    }
    return sum;
}
console.log(output(ar));
 