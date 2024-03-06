console.log(..."apnacollege"); 
let arr=[1,2,3,4,5];
let newarr=[...arr];

newarr.push(4);
console.log(newarr);
console.log(arr);

let even=[2,4,6,8,10];
let odd=[1,3,5,7,9];
let arr1=[...odd,...odd];
console.log(arr1);


// spread with object literals
let data ={
    email:"patelprince0555@gmail.com",
    password:1234
}
let datacopy={...data , country:"india",id:"patelprince0555"};
console.log(datacopy);
