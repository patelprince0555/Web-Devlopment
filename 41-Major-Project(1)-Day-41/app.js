const express=require("express");
const mongoose=require("mongoose");
const app=express();
const Listing=require("./models/listing.js");
const path = require("path");

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



app.get("/",(req,res)=>{
    res.send("Hi, i am root");
})

// index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  });

// show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  });

  // new Route
  app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
  });
  

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



app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})