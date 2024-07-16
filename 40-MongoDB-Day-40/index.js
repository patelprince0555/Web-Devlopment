const express =require("express");
const app=express();
const mongoose=require("mongoose");
const path = require("path");
const Chat=require("./models/chat.js");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     message:"send me your exam sheets",
//     Created_at:new Date(),
// })
// chat1.save().then((res)=>{
//     console.log(res);
// })

//index Route
app.get("/chats", async(req,res)=>{
    let chats= await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});

// new route
app.get("/chats/new",(req ,res)=>{
res.render("new.ejs");
})


// Create Route
app.post("/chats",(req,res)=>{
    let{from,to,message}=req.body;
    let newChat= new Chat({
        from:from,
        to:to,
        message:message,
        Created_at:new Date()
    });
    newChat.save().then((res)=>{
        console.log("chat was saved");
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
})


app.get("/",(req,res)=>{
    res.send("root is working");
})

app.listen(8080 ,()=>{
    console.log("server is listening on port 8080");
})