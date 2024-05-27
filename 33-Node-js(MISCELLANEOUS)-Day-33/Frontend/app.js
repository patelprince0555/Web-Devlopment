// factory functions
function personMaker(name,age){
    const person={
        name:name,
        age:age,
        talk(){
            console.log(`hi, my name is ${this.name}`);
        }
    }
    return person;
}


// constructors - doesn't return anything & start with capital
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.talk=functions(){
    console.log(`hi, my name is ${this.name}`);
}

let p1 = new Person("prince",21);
let p2 = new Person("simmi",22);
 