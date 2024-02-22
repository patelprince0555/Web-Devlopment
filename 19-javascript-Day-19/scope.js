let sum =54; // global scope

function calsum(a,b){
    let sum =a+b;
    console.log(sum);
    // function block
}

calsum(1,3);
console.log(sum);



// block scope
{
    let a=90;
    // it is a block scope

}
// console.log(a);



// lexical scope
function outerfunc(){
    console.log(x);

    function innnerfunc(){
        let x=9;
        let y=8;
        //  it is a lexical scope
    }
    innnerfunc();
}
