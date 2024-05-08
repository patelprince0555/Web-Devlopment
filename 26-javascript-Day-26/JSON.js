let url="https://catfact.ninja/facts?limit=1&max_length=140";
fetch(url)
.then((response)=>{
    console.log("reponse is:",response);
})
.catch((error)=>{
    console.log("error is:",error);
});
