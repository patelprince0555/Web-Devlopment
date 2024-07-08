const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);

const user1=new User({name:"prince",email:"patelprince055@gmail.com",age:20});
const user2= new User({name:"pkkkkkk",email:"patel333@gmail.com",age:33});

user1.save();
user2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
