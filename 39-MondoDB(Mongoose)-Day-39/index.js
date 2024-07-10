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

// delete ->query
User.findOneAndDelete({name:"peter"}).then((res)=>{
    console.log(res);
})

// User.deleteOne({name:"bruce"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// update -> returns query
// User.updateOne({name:"bruce"},{age:50}).then((res)=>{
// console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// find
// User.find().then((data)=>{
//     console.log(data);
// })

// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:50},
//     {name:"bruce",email:"bruce@gmail.com",age:67},
//     {name:"peter",email:"peter@gmail.com",age:38},
// ]).then((data)=>{
//     console.log(data);
// })

// const user1=new User({name:"prince",email:"patelprince055@gmail.com",age:20});
// const user2= new User({name:"pkkkkkk",email:"patel333@gmail.com",age:33});

// user1.save();
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

