function sum (...args){
    return args.reduce((add,el)=>add+el);
}
console.log(sum(1,2,3,4));


// destructuring
let names=["tony","prince","steve","peter"];
let[winner ,...runnerup]=names;
console.log(winner,runnerup);


// destructuring objects
