console.log(Math.PI);
console.log(Math.max(12,45,3,2,5,678,90))
console.log(Math.min(12,45,3,2,5,678,90))
console.log(Math.round(1.7))
console.log(Math.floor(1.7))
console.log(Math.ceil(1.1))
console.log(Math.abs(-5))
console.log(Math.random())//any random number between 0-1 where 0 is inclusive and 1 is exclusive
console.log(Math.sqrt(4))
console.log(Math.pow(2,2))
console.log(Math.cbrt(27))


//------------Date object---------//
let curr=new Date()
let date=new Date('June 8 2006 12:30')
let newDate=new Date(2006,5,8,12)
console.log(curr)
console.log(date)
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleDateString())