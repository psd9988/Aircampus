class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myIntro(){
        return(`My name is ${this.name} and my age is ${this.age}`)
    }
}

let human = new Person('Prashant','33');

console.log(human.myIntro());