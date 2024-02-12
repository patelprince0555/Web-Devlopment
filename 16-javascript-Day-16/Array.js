// let student1 = "prince";
// let student2 ="ritika";
//  let student3="rajat";

let students=["prince","ritika","sohan"];
console.log(students);
console.log(students.length);


let cars=["audi","bmw","xuv","maruti"];
let cars1=cars.push("toyota");
console.log(cars1);


//  practice question
// question1
let start =['january','july','march','august'];
let final=start.shift();
console.log(final);
console.log(start);


// slice
let colors=["red","yellow","blue","orange","pink","white"];
let colors2=["black","violet","purple"];
let colors1=colors.concat(colors2);
console.log(colors1);
console.log(colors1.slice(2));

// practice question 2

// question 1
let start1=["january","july","march","august"];
let start2=start1.splice(0,2,"july","june");
console.log(start1); 