"use strict";
// Create two arrays and two objects and concatenating those two arrays and two object using spread operator.
// For example:
// arr1 = [1,2,3,4]
// arr2 = [1,2,5]
// output: [1,2,3,4,1,2,5]
// obj1 = {id:1, name:"Mohan"}
// obj2 = {age: 20, country: "IND"}
// output: {"id": 1, "name": "Mohan", "age": 20, "country": "IND"}
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 5];
const outputArr = [...arr1, ...arr2];
console.log(`merged array: ${outputArr}`);
const obj1 = {
    id: 1,
    name: "Mohan",
};
const obj2 = { id: 1, name: "Mohan", age: 20, country: "IND" };
const outputObj = { ...obj1, ...obj2 };
console.log(outputObj);
