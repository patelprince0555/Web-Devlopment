let name ="prince";

let sum= function(a,b){
    return a+b;
}

console.log(sum(5,7));


//  higher value funcations

function multiplegreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello prince");
}

multiplegreet(greet,20);


// higher order functions(returns)
function oddorevenfactory(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even =function(n){
            console.log(n%2==0);
        }
        return even;
    } else{
        console.log("wrong request");
    }
}

let request="odd";