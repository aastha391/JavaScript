// async function getData(){
//     setTimeout(function(){
//         console.log("Inside timeout block");
//     },3000);
// }

// getData();

//----await-?

//---Fetch API
//  async function getData(){
//get response -async
//     let response=await fetch('');
//  parse json-async
//     let data=await response.json();
//     console.log(response);
//  }

//---scenario
//prepare url->sync
//await //fetch data->network call->async(until we r4ecieve data flow execution does not move forward)
//process data->sync


//----------post api
const myHeaders=new Headers();
myHeaders.append("Content-Type","application/json");

const url="https://jsonplaceholder.typicode.com/posts";

const options={
    method:"POST",
    body:JSON.stringify({username:"mr bean"}),
    headers:myHeaders,
};

async function getData(){
    const url="https://jsonplaceholder.typicode.com/posts/1";
    const response=await fetch(url,options);
    let data=await response.json();
    console.log("get data response : ",data);
}
async function postData(){
    const response=await fetch(url,options);
    let data=await response.json();
    console.log("post data response: ",data);
}
async function processdata(){
    await postData();
    await getData();
}
postData();
getData();