const express=require("express");
const app=express();
let port =3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is a basic response:");
//     // res.send({
//     //     name:"apple",
//     //     color:"red"
//     // });
//     let code ="<h1>fruits</h1><ul><li>apple</li><li>mango</li></ul>";
//     res.send(code);
// });


// app.get 
app.get("/",(req,res)=>{
    res.send("Hello! i am prine hi")
});
// app.get("/apple",(req,res)=>{
//     res.send("you connected apple path")
// });
// app.get("/mango",(req,res)=>{
//     res.send("you connected mango path")
// });
// app.get("*",(req,res)=>{
//     res.send("this path does not exist")
// });
// app.post("/",(req,res)=>{
//     res.send("you sent a post request")
// });

// app.get("/:username/",(req,res)=>{
//     let{username}=req.params;
//     let code=`<h1>This account belongs to @${username}</h1>`;
//     res.send(code);
// })

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("<h1>no result</h1>");
    }
    res.send(`<h1>search results for query: ${q}</h1>`)
});
