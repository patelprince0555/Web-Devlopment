 for(let i=1;i<=3;i++){
    console.log("outer loop"+i);
    for(let j=1;j<=3;j++){
        console.log(j)
    }
 }

//  while loop
let i=0;
while(i<=20){
    console.log(i);
    i++;
}


// guess fav movie game
let favmovie ="avatar";
let guess =prompt("guess my favorite movie");
while((guess!=favmovie)&&(guess!="quit")){
    guess=prompt("wrong guess. please try again");
}

if(guess==favmovie){
    console.log("congrats!")
}
else{
    console.log("you quit")
}