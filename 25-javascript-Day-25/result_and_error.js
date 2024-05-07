function savetodb(data){
    return new Promise((resolve ,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("resolve : data was saved");
        }else{
            reject("reject : weak connection");
        }
    });
}

savetodb("apna college")
.then((result)=>{
    console.log("data1 saved");
    console.log("result of promise:",result);
    return savetodb("helloworld");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promises:",result);
    return savetodb("prince");
}).then((result)=>{
    console.log("data3 saved");
    console.log("result of promises",result);
})
.catch((error)=>{
    console.log("promises was rejected");
    console.log("error of promise",error);
})