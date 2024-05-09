
let button =document.querySelector("button");
button.addEventListener("click",async()=>{
    let fact= await getfacts();
    console.log(fact);
    let p =document.querySelector("#result");
    p.innerText=fact;
});



let url="https://catfact.ninja/fact";

async function getfacts(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error-",e);
        return "No fact found";
    }
}
// let u =getfacts();
// console.log(u);