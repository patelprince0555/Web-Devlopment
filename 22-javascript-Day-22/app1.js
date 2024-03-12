// let para1 =document.createElement("p");
// para1.innerText="Hey I'm red!";
// document.querySelector("body").appendChild(para1);
// para1.style.color="red";


// question 3
let div =document.createElement("div");
let h1=document.createElement("h3");
let para2=document.createElement("p");
h1.innerText="I am in a div";
para2.innerText="Me To";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").prepend(div);