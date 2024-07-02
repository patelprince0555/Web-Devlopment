const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride=require("method-override");


app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"delta_app",
  password:"patel@12345"
});
// try{
// connection.query("SHOW TABLES",(err, result)=>{
//   if(err) throw err;
//   console.log(result);
// });
// }catch(err){
//   console.log(err);
// }
let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// Home route
app.get("/",(req,res)=>{
  let q = "SELECT count(*) FROM user";
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let count =result[0]["count(*)"];
      console.log(count);
      res.render("home.ejs",{count});
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  }
  // res.send("welcome to home page");
});


// show route
app.get("/user",(req,res)=>{
  let q = "SELECT * FROM user";
  try{
    connection.query(q, (err, users) => {
      if(err) throw err;
      res.render("showusers.ejs",{users});
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  }
});

// edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id} =req.params;
  let q= `SELECT * FROM user WHERE id='${id}'`;
  // console.log(id);
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user= result[0];
      res.render("edit.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  }
});
  

// UPADTE (DB) route
app.patch("/user/:id",(req,res)=>{
  let {id} =req.params;
  let {password: formpass,username:newUsername}=req.body;
  let q= `SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q, (err, result) => {
      if(err) throw err;
      let user= result[0];
      if(formpass!=user.password){
        res.send("WRONG PASSWORD");
      }else{
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          // res.send(result);
          res.redirect("/user");
        });
      }
    });
  }catch(err){
    console.log(err);
    res.send("some error in database");
  }
});


app.listen("8080",()=>{
  console.log("server is listening to port 8080");
})
 
// let q ="INSERT INTO user (id , username, email , password) VALUES ?";
// let data =[];
// for(let i =1; i<=100;i++){
//   data.push(getRandomUser());
//   // console.log(getRandomUser());
// }

// try{
//   connection.query(q ,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
//   });
// }catch(err){
//   console.log(err);
// }


// INSERTING NEW DATA

// let q="INSERT INTO user (id , username, email, password) VALUES ?";
// let users =[
//    ["123b", "123_newuserb","pp@gmail.comb","abcb"],
//    ["123a", "123_newusera","pp@gmail.coma","abca"],
//   ];

// try{
//   connection.query(q ,[users],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
//   });
// }catch(err){
//   console.log(err);
// }

// connection.end();
  // console.log(getRandomUser());


 