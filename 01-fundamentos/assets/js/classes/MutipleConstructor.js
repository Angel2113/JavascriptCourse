class Person {

    static byObject({ name, lastname, country }) {
        return new Person( name, lastname, country );
    }

    constructor( name, lastname, country ) {
        this.name   = name;
        this.lastname = lastname;
        this.country     = country;
    }

    getInfo() {
        console.log(`info: ${ this.name }, ${ this.lastname }, ${ this.country }`);
    }
}

const name1   = 'Melissa',
      lastname1 = 'Flores',
      country1     = 'Honduras';

const fher = {
    name:   'Fernando',
    lastname: 'Herrera',
    country:     'Costa Rica'
}      

const persona1 = new Person( name1, lastname1, country1 );
const persona2 = Person.byObject( fher );


persona1.getInfo();
persona2.getInfo();



