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

})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}
function levelup(){
    level++;
    h3.innerText=`level ${level}`;

    let randomidx=Math.floor(Math.random()*3);
    console.log(randomidx);
    let randcolor=btns[randomidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
}