const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}
let allchats=[{
    from:"prince",
    to:"ritika",
    message:"send me some hello message",
    Created_at:new Date(),
},{
    from:"monu",
    to:"harshit",
    message:"send me mony money",
    Created_at:new Date(),
},{
    from:"mohan",
    to:"raju",
    message:"how are you?",
    Created_at:new Date(),
},
{
    from:"ram",
    to:"shayam",
    message:"come today for a task",
    Created_at:new Date(),
},{
    from:"raju",
    to:"raju3333",
    message:"how are you?",
    Created_at:new Date(),
}]

Chat.insertMany(allchats).then((res)=>{
    console.log(res);
})