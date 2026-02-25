


// function changeText(event){
//     console.log(event);
//     let fpara=document.getElementById('fpara');
// fpara.textContent='Namaste'
// }

// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText);
//fpara.removeEventListener('click',changeText);  -->to remove an event listener



// let fanchor=document.getElementById('fanchor');
// //stooping default behaviour of anchor tag 
// fanchor.addEventListener('click',function(event){
//     event.preventDefault();
//     fanchor.textContent='Click done'
// });

//preventing extra event listener

// let paras=document.querySelectorAll('p');

//target refers to the current event in case of a span inside a para if we click on span content it will print only that in alert and if we click on para content it will print complete line 
function alertPara(event){
    if(event.target.nodeName==='SPAN'){//to print only when span element is clicked
    alert("You have clicked on para"+event.target.textContent);
    }
}

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertPara);
// }


//applying the event listener on the div itself
let mydiv=document.getElementById('wrapper');
document.addEventListener('click',alertPara);
