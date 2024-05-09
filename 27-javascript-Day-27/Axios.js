let url="http://universities.hipolabs.com/search?name=";
let btn =document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value
    let colleges = await getcolleges(country);
    show(colleges);
});
function show(colleges){
    for(col of colleges){
        console.log(col.name);
    }
}
let country="nepal";
async function getcolleges(country){
    try{
        let res =await axios.get(url+country);
       return res.data;
    }catch(e){
        console.log("error:",e);
        return [];
    }
}