let button =document.querySelector("button");
button.addEventListener("click",async()=>{
    let link=await getimage();
    // console.log(link);
    // let p =document.querySelector("#result");
    // p.innerText=fact;

    let img=document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
});


let url ="https://dog.ceo/api/breeds/image/random";
async function getimage(){
    try{
        let res=await axios.get(url);
        return res.data.message;
        // console.log(res.data.message);
    }catch(e){
        console.log("error-",e);
        return "No image found";
    }
}