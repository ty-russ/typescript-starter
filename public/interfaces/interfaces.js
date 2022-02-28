"use strict";
//create an object of type isPerson
const me = {
    name: "kim",
    age: 7,
    speak(message) {
        console.log(message);
    },
    spend(amount) {
        console.log("i spent ", amount);
        return amount;
    },
};
console.log(me.speak("hello"));
console.log(me.spend(500));
const greetPerson = (person) => {
    console.log("Hello ", person.name);
};
greetPerson(me);
