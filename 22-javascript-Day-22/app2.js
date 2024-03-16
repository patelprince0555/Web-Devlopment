//  question 1
//  Create a new input and button element on the page using JavaScript only. Set the  
// text of button to "Click me' 

let button=document.createElement("button");
let input=document.createElement("input");

button.innerText="click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//  question 2
//  Add following attributes to the element : 
// Change placeholder value of input to "username" 
// Change the id of button to "btn' 
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");


// question 3
//  Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white. 
let btn=document.querySelector("#btn");
btn.classList.add("btnstyle");


// question 4
//  Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM practice</u>";
document.querySelector("body").append(h1);
h1.setAttribute("id","head");
let head1=document.querySelector("#head");
head1.classList.add("headstyle");


// question 5
//  Create a p tag on the page and set its text to "Apna College Delta Practice", 
// where Delta is bold.
let p= document.createElement('p');
p.innerHTML= "Apna College<b> Delta</b> Practice";
document.querySelector("body").append(p);



