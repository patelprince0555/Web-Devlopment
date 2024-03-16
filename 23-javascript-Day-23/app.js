// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick=function(){
//     alert("button was clicked")
// }

// btn.onclick=sayhello;


function sayhello(){
    alert("hello");
}


function sayname(){
    alert("Apna college");
}

// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onmouseenter=function(){
//         console.log("you enteted a button");
//     }
//     btn.onclick = sayhello;
// }

//  Event listener
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayname);


    }


