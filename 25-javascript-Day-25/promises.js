function savetodb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }else{
        failure();

    }
}

savetodb("apna college",()=>{
    console.log("your data was saved");
},()=>{
    console.log("weak connection. data not saved");
})