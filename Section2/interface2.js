"use strict";
const Students = [
    {
        id: 1,
        name: "Rohan",
        college: "GEC",
        age: 20,
    },
    {
        id: 2,
        name: "Rahul",
        college: "GEC",
        age: 20,
    },
    {
        id: 3,
        name: "Ram",
        college: "VVP",
        age: 20,
    },
    {
        id: 4,
        name: "Rakesh",
        college: "DARSHAN",
        age: 20,
    },
];
const out = {};
for (const stu of Students) {
    if (Object.hasOwn(out, stu.college)) {
        out[stu.college] += 1;
    }
    else {
        out[stu.college] = 1;
    }
}
console.log(out);
