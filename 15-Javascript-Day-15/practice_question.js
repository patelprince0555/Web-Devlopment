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
