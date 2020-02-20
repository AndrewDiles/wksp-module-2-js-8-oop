// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

class Cat {
    constructor(name, breed) {
        this.species = 'Felis catus';
        this.name = name;
        this.breed = breed;
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }
    sleep = (hours) => {
        this.tiredness -= 5*hours;
        this.happiness += hours;
    }
    eat = (grams) => {
        this.hunger -=grams/5;      //guessing we can go into negatives?
        this.happiness += 2*grams;
    }
    play = (minutes) => {
        this.loneliness -= minutes*3;
        if (minutes > 10) {minutes = 10;};
        this.happiness += 5*minutes;
    }
    wait = (minutes) => {
        this.tiredness -= 0.025*minutes;
        this.hunger -= 0.5*minutes;
        this.loneliness -= minutes;
        this.happiness += 0.1*minutes;              //so I think while time is elapsing during sleep or eating, etc, other factors would be changing, but w/e
    }

}

let boots = new Cat('Boots', 'Simaese');

// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(20);
console.log(boots);