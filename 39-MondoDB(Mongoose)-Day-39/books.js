const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amozon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"please enter a valid price for selling"]
    },
});

const Book= mongoose.model("Book",bookSchema);

let book1=new Book({
    title:"mathematics XII",
    author:"RD shrama",
    price:"-200",
});
book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
})