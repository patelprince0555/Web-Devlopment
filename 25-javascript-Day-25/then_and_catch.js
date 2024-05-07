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

let request =savetodb("apna college");
request.then(()=>{
    console.log("promise was resolved");
    console.log(request);
})
.catch(()=>{
    console.log("promise was rejected");
    console.log(request);
})

savetodb("apna college")
.then(()=>{
    console.log("data1 saved:promise was resolved");
    return savetodb("hello world");
}).then(()=>{
    console.log("data2 saved");
}
).catch(()=>{
    console.log("promise was rejected");
});