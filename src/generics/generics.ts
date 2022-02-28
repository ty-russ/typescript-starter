///GENERICS  creates a block of code that can be used with different types
// using <T> allows us to capture whatever is passed to a method
// adding extends limits allows for the params passed to a method

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

let docTwo: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: {
    name: "kim",
    age: 40,
  },
};

let docThree: Resource<string[]> = {
  uid: 1,
  resourceName: "person",
  data: ["kim", "forty"],
};

console.log(docOne, docTwo, docThree);
