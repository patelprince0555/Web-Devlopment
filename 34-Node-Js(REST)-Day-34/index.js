const express = require("express");
const app = express();
const port =8080;
const path = require("path"); 

app.use(express.urlencoded({extended: true}));

app.set ("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static (path.join(__dirname ,"public")));

let posts=[
    {
        username:"apnacollege",
        content:"i love coding"
    },
    {
        username:"prince patel",
        content:"hard work is important to achieve sucess",
    },
    {
        username:"rahul kumar",
        content:"i got my first internship!"
    }
]


app.get("/posts",(req ,res)=>{
    res.render("index.ejs",{posts});
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})