/*let runagain=true;
const candrive=(age)=>{
    return age>18?true:false;
}
while(runagain){
let a= prompt("Enter your age")
a=Number.parseInt(a)
if(a<0){
    console.error("Enter a valid age");
    break;
}
if(candrive(a)>=18)
{
    alert("You can drive")
}
else{
    alert("You cannot drive")
}
 runagain=confirm("Do you want to see the prom again?")
}



let color=prompt("Enter a colour")
document.body.style.background=color;*/

//Snake water gun game
/*
let user=prompt("Enter S,W or G");
let cpuI=Math.floor(Math.random()*3)
let cpu=["S","W","G"][cpuI]

const match=(user,cpu)=>{
    if(user==cpu){
        return "Nobody";
    }
    else if(user=="S" && cpu=="W")
    {
        return "user";
    }
    else if(user=="S"&&cpu=="G")
    {
        return "cpu";
    }
    else if(user=="W"&&cpu=="S")
    {
        return "cpu"
    }
    else if(user=="W"&&cpu=="G")
    {
        return "user"
    }
    else if(user=="G"&&cpu=="S")
    {
        return "user"
    }
    else if(user=="G"&&cpu=="W"){
        return "cpu"
    }
}

let result=match(user,cpu);
document.write(`CPU:${cpu} and User:${user} \nThe winner is: ${result}`);*/ 

const d= new Date(2025,2,15);
d.toDateString()
console.log(d);