//  question 1
// write a js program to delete all occurrences of element 'num'in a given array
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

// question 2
//  write a js program to find the no of digits in a number
let number=287152;
let count =0;
while(number>0){
    count++;
    number=Math.floor(number/10);
}
console.log(count);

//  question 3
//  write a js program to find the sum of digits in a number
let number1 =287152;
let sum=0;
while(number1>0){
digit =number1%10;
sum=sum+digit;
number1=Math.floor(number1/10);
}
console.log(sum);

// question 4
//  print the factorial of a number n
let  n=7;
let fact =1;
for(let i=1;i<=n;i++){
    fact =fact*i;

}
console.log(fact);


// find the largest number in an array with only positive numbers
let arr1 =[2,5,10,4,7,1,9];
let largest =0;
for(let i=0;i<arr1.length;i++){
    if(largest<arr1[i]){
        largest=arr1[i];
    }
}
console.log(largest);