// function getnum(){
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//             let num =Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getnum();
//     await getnum();
//     await getnum();
// }

let h1 =document.querySelector("h1");
function changecolor(color,delay){
   return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed!")
        },delay);
    });
}


async function demo(){
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("green",1000);
    await changecolor("blue",1000);
}
demo();
console.log(demo);

// changecolor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changecolor("orange",1000)
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changecolor("green",1000)
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changecolor("blue",1000)
// })
// .then(()=>{
//     console.log("blue color was completed");
  
// });