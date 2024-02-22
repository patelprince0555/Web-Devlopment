let sum =54; // global scope

function calsum(a,b){
    let sum =a+b;
    console.log(sum);
}

calsum(1,3);
console.log(sum);