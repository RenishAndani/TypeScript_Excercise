import { CourseForm } from "./components/CourseForm.js";
import { TaskList } from "./components/TaskList.js";
import type { Course } from "./models/Course.js";
import { DragDrop } from "./utils/dragDrop.js";

const courses: Course[] = [];

const tasklist = new TaskList();

const courseForm = new CourseForm((course) => {
  courses.push(course);

  tasklist.render(courses);
});

const dragDrop = new DragDrop((courseId, status) => {
  const course = courses.find((course) => course.id === courseId);

  if (!course) {
    return;
  }

  course.status = status;
  tasklist.render(courses);
});
