const express=require("express");
const mongoose=require("mongoose");
const app=express();
const path = require("path");
const methodOverride = require("method-override");
const ejsmate= require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session= require("express-session");
const flash =require("connect-flash");

const listings= require("./routes/listing.js");
const reviews=require("./routes/review.js")


main().then((res)=>{
    console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderLust');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsmate);
app.use(express.static(path.join(__dirname,"/public")));

const sessionOptions={
  secret:"mysupersecretcode",
  resave:false,
  saveUninitialized:true,
  Cookie:{
    expires:Date.now()+7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
  },
};

app.get("/",(req,res)=>{
  res.send("Hi, i am root");
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  next();
})


app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);
  
// app.get("/listing", async (req,res)=>{
// let sampleListing=new Listing({
//     title:"my new villa",
//     description:"by the beach",
//     price:1200,
//     location:"delhi rohini",
//     country:"india",
// });
//  await sampleListing.save();
// console.log("data was saved");
// res.send("succesful testing");
// })

app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"Page not found!"));
});


app.use((err,req,res,next)=>{
  let {statusCode=500 , message="something went wrong"}=err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs",{message});
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});