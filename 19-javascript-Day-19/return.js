// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,5));
// console.log(sum(sum(2,4),4));



//  create a function that returs the sum of the numbers from 1 to n
function getsum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(getsum(5));


//  create a function that returns the concatenation of all strings in an array.
let str =["hi","hello","bye","!"];

function concat(str){
    let result="";

    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}

console.log(concat(str))