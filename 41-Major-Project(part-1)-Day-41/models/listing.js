const mongoose=require("mongoose");
const Schema= mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-small-cabin-in-the-middle-of-a-forest-hzEJGVijmVU",
        set:(v)=>v===""?"https://unsplash.com/photos/a-small-cabin-in-the-middle-of-a-forest-hzEJGVijmVU":v,
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;