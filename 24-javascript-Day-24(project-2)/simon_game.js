let gameseq=[];
let useresq=[];

let btns=["yellow","red","green","purple"];
let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }

});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}

function levelup(){
    useresq=[];
    level++;
    h3.innerText=`level ${level}`;

    let randomidx=Math.floor(Math.random()*3);
    // console.log(randomidx);
    let randcolor=btns[randomidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){
    // console.log("curr level:",level);
    // let idx = level-1;
    if(useresq[idx] === gameseq[idx]){
        if(useresq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
        // console.log("same value");
    }else{
        h3.innerHTML=`Game over! your score was <b>${level}<b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    // console.log(usercolor);
    useresq.push(usercolor);
    checkans(useresq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    useresq=[];
    level=0;
}