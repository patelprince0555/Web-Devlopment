let btn =document.querySelector("button");
let ul=document.querySelector("ul");
let inp =document.querySelector("input");

btn.addEventListener("click",function(){
    let item =document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn); 
   
});

// let delbtns=document.querySelectorAll(".delete");
// for(delBtn of delbtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }