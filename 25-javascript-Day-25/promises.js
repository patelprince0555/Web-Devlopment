function savetodb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
        
    }
}