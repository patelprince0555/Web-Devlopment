let todo=[];

let req = prompt("plz enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting App");
        break;
    }
      if(req=="list"){
        console.log("_____________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("_____________")
    }
    else if(req=="add"){
        let add =prompt("plz enter task which you want to add");
        todo.push(add);
        console.log("task added")
    }
    else if(req=="delete"){
        let del =prompt("plz enter index which you want to delete");
        todo.splice(del,1);
        console.log("task deleted")
    }
    req=prompt("plz enter your request");
}