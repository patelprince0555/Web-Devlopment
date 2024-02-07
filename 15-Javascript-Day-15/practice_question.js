// question 1
let num =20;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

// question 2
// let firstname=prompt("Enter your name");
// let age=prompt("Enter your age");
// let form=firstname+" is "+age+" years old.";
// let form1 = `${firstname} is ${age} years old`;
// alert(form1);


// question 3
let quarter = 3;
switch(quarter){
    case 1:
        console.log("january, february, march");
        break;
        case 2:
            console.log("april, may ,june")
            break;
            case 3:
                console.log("july august september");
                break;
                default:
                    console.log("october, november, december")
}


// question 4
let str = "appleee";
console.log(str.length);
if((str[0]=='A'||str[0]=='a')&&str.length>5){
    console.log("Golden String");
}
else{
    console.log("not");
}

// question 5
let a= 40;
let b= 4;
let c =10;
if(a>b&&a>c){
    console.log(a, " is greater");
}
else if(b>c){
    console.log(b ," is greater");
}
else{
    console.log(c," is greater")
}

// question 6

let num1= 32;
let num2 = 47852;
if((num1%10)==(num2%10)){
    console.log("numbers have the same last digit which is ",num2%10);
}
else{
    console.log("numbers don't have the same last digit");
}