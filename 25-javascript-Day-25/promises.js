// function savetodb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();

//     }
// }

// savetodb("apna college",
// ()=>{
//     console.log(" success : your data was saved");
//     savetodb(
//         "hello world",
//         () => {
//         console.log("success 2 : data was saved");
//         savetodb(
//             "prince",
//             ()=>{
//             console.log("success 3: data was saved");
//         },
//         ()=>{
//             console.log("failure 3: weak connection data was not saved");
//         }
//     );
//     },
//     ()=>{
//         console.log("failure 2 :weak connection data was not saved");
//     } 
//    );
//     }, 
//   ()=>{
//     console.log(" Failure : weak connection. data not saved");
// });


function savetodb(data){
    return new Promise((resolve ,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("resolve : data was saved");
        }else{
            reject("reject : weak connection");
        }
    });
}
   
