//defines how an object should look like
//ensures that whatever uses it has all the properties and their defined types
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
//create an object of type isPerson
const me: isPerson = {
  name: "kim",
  age: 7,
  speak(message: string): void {
    console.log(message);
  },
  spend(amount: number): number {
    console.log("i spent ", amount);
    return amount;
  },
};

console.log(me.speak("hello"));
console.log(me.spend(500));

const greetPerson = (person: isPerson) => {
  console.log("Hello ", person.name);
};

greetPerson(me);
