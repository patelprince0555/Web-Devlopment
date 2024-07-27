const express=require("express");
const app=express();


// app.use((req,res,next)=>{
//     console.log("Hi, i am 1st middleware");
//     next();
//     console.log("this is after");
// });


// app.use((req,res,next)=>{
//     console.log("Hi, i am 2nd middleware");
//     next();
// });

app.use("/",(req,res,next)=>{
    console.log("i am only for random");
    next();
})

app.get("/",()=>{
    console.log("Hi, I am root");
})

app.get("/random",()=>{
    console.log("This is random page");
})

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})