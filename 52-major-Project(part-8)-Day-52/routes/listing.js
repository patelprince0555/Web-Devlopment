const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing}=require("../middleware.js");

const listingController=require("../controllers/listings.js");
  // index Route
router.get("/",
    wrapAsync(listingController.index));
  
    // new Route
    router.get("/new",isLoggedIn, listingController.renderNewForm);
    
  // show Route
  router.get("/:id",
    wrapAsync(listingController.showlisting)
  );
  
  
    //Create Route
  router.post("/",validateListing,isLoggedIn,
    wrapAsync (listingController.createListing)
  );
    
  
    // edit route
    router.get("/:id/edit",isLoggedIn,isOwner,
      wrapAsync(listingController.renderEditForm)
  );
  
    // update Route
    router.put("/:id",isLoggedIn,isOwner,
      validateListing,
      wrapAsync(listingController.updateListing )
  );
  
  
    // delete Route
    router.delete("/:id",isLoggedIn,isOwner,
      wrapAsync(listingController.destoryListing )
  );

  module.exports=router;