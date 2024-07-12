class PersonExample {

    name= '';
    code= '';
    phrase= '';
    _food;

    static _counter = 0;
    constructor(name, code, phrase) {
        this._name = name;
        this._code = code;
        this._phrase = phrase;

        PersonExample._counter++;
    }

    static message(){
        console.log(this.name);
        console.log('This is a static method');
    }

    get food() {
        return this._food;
    }

    set food(value) {
        this._food = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get phrase() {
        return this._phrase;
    }

    set phrase(value) {
        this._phrase = value;
    }

    whoAmI() {
        console.log(`I'm ${ this.code} and my identity is ${ this.name}`);
    }

    myPhrase () {
        console.log(`My phrase is ${this.phrase}`);
    }
}

const spiderman = new PersonExample('Peter Parker', 'Spiderman', 'With great power comes great responsibility');
const ironman = new PersonExample('Tony Stark', 'Ironman', "I'm Ironman")

spiderman.whoAmI();
