const express=require("express");
const app=express();
let port =3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.use((req,res)=>{
    // console.log(req);
    console.log("request received");
    // res.send("This is a basic response:");
    // res.send({
    //     name:"apple",
    //     color:"red"
    // });
    let code ="<h1>fruits</h1><ul><li>apple</li><li>mango</li></ul>";
    res.send(code);
});

