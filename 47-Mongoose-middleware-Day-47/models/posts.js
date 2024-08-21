const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
.then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new Schema({
    username:String,
    email:String,
});

const postSchema = new Schema({
    content:String,
    Likes:Number,
    User:{
        type: Schema.Types.ObjectId, 
        ref:"User"
    },
});

const User=mongoose.model("user",userSchema);
const post=mongoose.model("post",postSchema);

const addData=async()=>{
    let user1 = new User({
        username:"prince patel",
        email:"patelprince055@gmail.com",
    });


    let post1 =new post({
        content:"helllo world!",
        Likes:7,
    });


    post1.User=user1;
    await user1.save();
    await post1.save();
};

addData();
