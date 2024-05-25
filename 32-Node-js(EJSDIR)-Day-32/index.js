const express =require("express");
const app =express();
const port =3000;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello prince!");
})

app.get("/rolldice",(rq,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});

