interface stu {
  id: number;
  name: string;
  collage: string;
  marks: number;
}

const students: stu[] = [
  {
    id: 1,
    name: "Mohan",
    collage: "VVP",
    marks: 60,
  },
  {
    id: 2,
    name: "Rakesh",
    collage: "VVP",
    marks: 71,
  },
  {
    id: 3,
    name: "Manohar",
    collage: "GECR",
    marks: 80,
  },
  {
    id: 4,
    name: "Rohan",
    collage: "GECR",
    marks: 70,
  },
  {
    id: 5,
    name: "Mohit",
    collage: "DARSHAN",
    marks: 31,
  },
];

const gt70 = (students: stu[]): stu[] => {
  return students.filter((obj) => {
    if (obj.marks > 70) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(gt70(students));

const namesOfStudent = (students: stu[]): string[] => {
  const ans: string[] = [];

  for (const obj of students) {
    ans.push(obj.name);
  }

  return ans;
};

console.log(namesOfStudent(students));

interface res extends stu {
  result: string;
}

const result = (students: stu[]): res[] => {
  const ans: res[] = [];

  for (const obj of students) {
    if (obj.marks < 33) {
      ans.push({ ...obj, result: "FAIL" });
    } else {
      ans.push({ ...obj, result: "PASS" });
    }
  }

  return ans;
};

console.log(result(students));
