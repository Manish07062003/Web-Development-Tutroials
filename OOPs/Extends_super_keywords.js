class pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}
class Cat extends pet{
    constructor(name,age,livesleft=9){
        super(name,age)
        this.livesleft=livesleft;
    }
    meow() {
        return 'Meowww!!';
    }
    eat() {
        return `${this.name} kitten is eating`;
    }
}
class Dog extends pet{
    bark() {
        return 'Woof!!';
    }
}