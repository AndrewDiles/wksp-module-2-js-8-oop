class Student {
    constructor() {
        this.excitement = 1;
    }

    learn = () => {
        this.excitement = this.excitement  + 5;
    }

    writeCode = () => { learn(); }     //does not work. Must use this.learn()
}

let bob = new Student();
bob.writeCode();