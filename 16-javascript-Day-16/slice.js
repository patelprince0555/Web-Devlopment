let str = "ilovecoding";
console.log(str.slice(5));
console.log(str.slice(1,5));
console.log(str.slice(-2));  // 10-2 = 8
                             // console.log(str.slice(8))  


// replce method
let msg = "ilovecoding";
console.log(msg.replace("love","prince"))     



// repeat method
let msg1 = "prince"+ " ";
console.log(msg1.repeat(5));


// practice question

// question1 
let msg2 = "help!"
console.log(msg2.trim().toUpperCase());


// question2 
let msg4= "apnacollege";
let msg5 = msg4.slice(4);
let msg6= msg5.replace("l","t").replace("l","t");
console.log(msg6);