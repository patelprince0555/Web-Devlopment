console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// print number using loop
for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=5;i>=1;i--){
   console.log(i);
}

//  print all odd numbers(1to15)
// metod 1
for(let j=1;j<=15;j=j+2){
    console.log(j)
}
console.log("backwards")
for(let k=21;k>=1;k=k-2){
    console.log(k)
}


// let n=15;
// for(let i=1;i<=n;i++){
//     if(i%2!=0){
//         console.log(i)

//     }
// }

//
console.log(" print all even numbers (2to10)")
let n =10;
for(let i=2;i<=10;i=i+2){
    console.log(i)
}


// print the multiplication table of 5
console.log("print the multiplication table of 5")
let n1= 5;
for(let i=1;i<=10;i++){
    let table =i+"*"+n1+"="+i*n1;
    console.log(table)

}

// method 2
let n2 =prompt("Enter your number which you want to write table");
console.log("print the multiplication table of "+n2)
n2=parseInt(n2);
for(let i=n2;i<=n2*10;i=i+n2){
    console.log(i)
}