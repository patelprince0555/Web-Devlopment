const express=require("express");
const app=express();


app.use((req,res)=>{
    let{query}=req.query;
    console.log(query);
    console.log("Hi, i am middleware");
    res.send("middleware finished");
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