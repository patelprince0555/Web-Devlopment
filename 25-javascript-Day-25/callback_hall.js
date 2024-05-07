let h1 =document.querySelector("h1");
function changecolor(color,delay){
   return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed!")
        },delay);
    });
}


changecolor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changecolor("orange",1000)
})
.then(()=>{
    console.log("orange color was completed");
    return changecolor("green",1000)
})
.then(()=>{
    console.log("green color was completed");
    return changecolor("blue",1000)
})
.then(()=>{
    console.log("blue color was completed");
  
});

// changecolor("red",1000,()=>{
//     changecolor("orange",1000 ,()=>{
//         changecolor("green",1000,()=>{
//             changecolor("blue",1000,()=>{
//                 changecolor("blue",1000);
//             })
//         })
//     })
// })