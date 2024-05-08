let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log("reponse is:",response);
    return response.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((error)=>{
    console.log("error is:",error);
});
