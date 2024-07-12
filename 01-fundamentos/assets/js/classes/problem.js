function Person( name, age) {
    this.name = name;
    this.age = age;

    this.print = () => {
        console.log(`Name: ${this.name} `)
    }

}

const maria = new Person('Maria', 30)
maria.print()