interface Student {
  id: number;
  name: string;
  college: string;
  age: number;
  gender?: string;
}

const Students: Student[] = [
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

type DynamicStringObject = {
  [key: string]: number;
};

const out: DynamicStringObject = {};

for (const stu of Students) {
  if (Object.hasOwn(out, stu.college)) {
    out[stu.college] += 1;
  } else {
    out[stu.college] = 1;
  }
}

console.log(out);
