const { Talk } = require('./Talk')

exports.Greet = class Greet extends Talk {
    constructor(name) {
        super();
        this.name = name; 
    }

    sayHello() {
        const hello = 'hello ' + this.name
        this.say(hello)
    }
    
    sayGoodbye() {
        const bye = 'Good bye ' + this.name
        this.say(bye)
    }
}