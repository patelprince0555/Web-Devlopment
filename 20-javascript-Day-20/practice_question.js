// write an arrow function that returns the squre of a number 'n'
const squre = n =>{
    return n*n;
}

console.log(squre(3));

//  write a function that prints "hello world" 5 times at intervals of 2s seconds
let id =setInterval(()=>{
    console.log("Hello world");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval run ")
}, 10000)
