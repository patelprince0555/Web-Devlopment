let h1 =document.querySelector("h1");
function changecolor(color,delay){
    new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed!")
        },delay);
    });
}

changecolor("red",1000,()=>{
    changecolor("orange",1000 ,()=>{
        changecolor("green",1000,()=>{
            changecolor("blue",1000,()=>{
                changecolor("blue",1000);
            })
        })
    })
})