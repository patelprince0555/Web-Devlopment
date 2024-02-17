// let fruits = ["mango","apple","banana","litchi","orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i ,fruits[i]);
// }

// backward
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i ,fruits[i]);
// }

// nested loops with nested arrays
let heros =[
    ["ironman","spiderman","thor"],
    ["superman","wonder women","flash"]
]

for(let i=0;i<heros.length;i++){
    console.log(i,heros[i],heros[i].length);
    for(let j=0;j<heros[i].length;j++){
        console.log(j,heros[i][j])
    }
}