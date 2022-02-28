"use strict";
///GENERICS  creates a block of code that can be used with different types
// using <T> allows us t0 capture whatever is passed to a method
// adding extends limits allows for the params passed to a method
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);
let docTwo = {
    uid: 1,
    resourceName: "person",
    data: {
        name: "kim",
        age: 40,
    },
};
let docThree = {
    uid: 1,
    resourceName: "person",
    data: ["kim", "forty"],
};
console.log(docOne, docTwo, docThree);
