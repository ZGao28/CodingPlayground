class Person {
    constructor(name='Anonymous', age=0){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        return this.hasMajor() ? `${super.getDescription()} Currently taking ${this.major}.` : `${super.getDescription()} Currently has no major.`;
    }
}


const Zi = new Student('Zi', 19);
const base = new Person();

console.log(Zi.getDescription());
console.log(base.getDescription());