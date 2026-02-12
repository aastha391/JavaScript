 //compile time error
 //console.log(1;  -->syntax error

 //runtime error
 //console.log(x);//x not defined so show error at runtime 


 //------------Error handling-----------//

//  try{
//     console.log(x);
//  }

//  catch(e){
//     //error ke sath kya krna h 
//     //retyr logic
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("Error");
//  }
//  finally{
//     console.log("Inside Finally")
//  }



//-----Throw keyword------//
// try{
//     console.log(x);
// }
// catch(e){
//     throw new Error("Declare the variable first");
// }


let errorCode=100;
if(errorCode==100){
    throw new Error("Invalid")
}