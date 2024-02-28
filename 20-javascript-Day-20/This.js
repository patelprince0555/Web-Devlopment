const student ={
    name:"prince",
    age:23,
    eng:95,
    math:97,
    phy:97,
    getAvg(){
        console.log(this);
        let avg =(this.eng+this.math+this.phy)/3;
        console.log('${this.name} got avg marks=${avg}');
    }
}
console.log(student);