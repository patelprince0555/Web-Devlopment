console.log("Hi there!");
setTimeout(()=>{
    console.log("Apna college");
} , 4000);
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");


// set interval
 let id =setInterval(()=>{
    console.log("Apna college");
} , 4000);

console.log(id);



//  this with arrow functions
const student ={
    name:"prince",
    marks:95,
    prop:this,
    getName:function(){
        console.log(this);// parents scope-> window
        return this.marks;
    },
    getMarks:()=>{
        console.log(this);
        return this.marks;
    },
    getinfo1:function(){
        setTimeout(()=>{
            console.log("this");
        } ,2000);
    },

    getinfo2:function(){
        setTimeout( function(){
            console.log(this);
        } ,2000);
    }
}
