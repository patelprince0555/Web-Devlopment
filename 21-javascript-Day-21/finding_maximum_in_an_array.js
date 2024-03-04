let nums=[2,3,4,5,3,4,7,8,9,1,2];
// let max=-1;
// for(let i=0;i<nums.length;i++){
//     if(max<nums[i]){
//         max=nums[i];
//     }
// }
// console.log(max);


//  now use to reduce method to solve this problem
let max =nums.reduce((max,el)=>{
    if(max>el){
        return max;
    }else{
        return el;
    }
});
console.log(max);
