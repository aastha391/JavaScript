//code 1
//in this we have to reflow and repaint 100 times 
// const t1=performance.now();
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent='This is para'+i;
//     document.body.appendChild(para);
// }
// const t2=performance.now();

// console.log("total time"+(t2-t1))



// //code 2
// //in this we reflow and repaint only one time so this one if faster
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//      let para=document.createElement('p');
//     para.textContent='This is para'+i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);
// const t4=performance.now();
// console.log("total time"+(t3-t4))//this one is faster 


//best code
let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent='This is para'+i;
    fragment.appendChild(para);//no reflow and no repaint for this line
}

document.body.appendChild(fragment);//this line takes one reflow and one repaint