const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");


const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"delta_app",
  password:"patel@12345"
});
let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let q ="INSERT INTO user (id , username, email , password) VALUES ?";
let data =[];
for(let i =1; i<=100;i++){
  data.push(getRandomUser());
  // console.log(getRandomUser());
}
// let users =[
//    ["123b", "123_newuserb","pp@gmail.comb","abcb"],
//    ["123a", "123_newusera","pp@gmail.coma","abca"],
//   ];
try{
  connection.query(q ,[data],(err,result)=>{
    if(err)throw err;
    console.log(result);
    // console.log(result.length);
    // console.log(result[0]);
    // console.log(result[1]);
  });
}catch(err){
  console.log(err);
}

connection.end();


  // console.log(getRandomUser());