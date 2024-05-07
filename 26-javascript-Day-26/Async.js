 async function greet(){
    throw "404 is not found";
    return "hello";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result is:",result);
})
.catch((error)=>{
    console.log("promise was rejected with err:",error);
});