let num =[1,2,3,4];
let double =num.map((el)=>{
    return el*el;
});

console.log(double);


let student = [{
    name:"prince",
    marks:90
},{
    name:"simran",
    marks:85

},{
    name:"ritika",
    marks:99
}];

let gpa =student.map((el)=>{
    return el.marks/10;
});
console.log(gpa);


// filter
let nums=[2,4,1,5,6,2,7,8,9];
let even =nums.filter((el)=>{
    return el%2==0;
});
console.log(even);