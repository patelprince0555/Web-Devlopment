const express=require("express");
const mongoose=require("mongoose");
const app=express();
const Listing=require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsmate= require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema}=require("./schema.js");


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


app.get("/",(req,res)=>{
    res.send("Hi, i am root");
})

const validateListing=(req,res,next)=>{
  let{error}=listingSchema.validate(req.body);
  if(error){
    let errMsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errMsg);
  }else{
    next();
  }
}


// index Route
app.get("/listings",
  wrapAsync( async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

  // new Route
  app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
  });
  
// show Route
app.get("/listings/:id",
  wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  })
);


  //Create Route
app.post("/listings",validateListing,
  wrapAsync (async (req, res,next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);
  

  // edit route
  app.get("/listings/:id/edit",
    wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

  // update Route
  app.put("/listings/:id",
    validateListing,
    wrapAsync( async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);


  // delete Route
  app.delete("/listings/:id",
    wrapAsync( async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  })
);
  
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