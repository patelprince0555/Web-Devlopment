// let a=5;
// for(let i=0;i<=a;i++){
//     console.log("hello peince "+i);
// }

// process
// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello to ",args[i]);
// }

// const math=require("./Math");
// console.log(math);
// console.log(math.g);
// console.log(math.sum(2,4));



// const fruits=require("./fruits");
// console.log(fruits);
// console.log(fruits[0].name);


// const figlet = require("figlet");

// figlet("prince patel", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import {sum,pi} from "./Math.js";
console.log(sum(2,4));
console.log(pi);