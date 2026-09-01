import type { Course } from "../models/Course";

export class CourseForm {
  private form: HTMLFormElement;

  private courseName: HTMLInputElement;
  private courseDescription: HTMLTextAreaElement;
  private courseDuration: HTMLInputElement;

  constructor(private onCourseCreated: (course: Course) => void) {
    const form = document.querySelector<HTMLFormElement>("#courseForm");

    if (!form) {
      throw new Error("course form not found");
    }

    this.form = form;

    const courseName = document.querySelector<HTMLInputElement>("#courseName");
    const courseDescription = document.querySelector<HTMLTextAreaElement>("#courseDescription");
    const courseDuration = document.querySelector<HTMLInputElement>("#courseDuration");

    if (!courseName || !courseDescription || !courseDuration) {
      throw new Error("Course form field is not found");
    }

    this.courseName = courseName;
    this.courseDescription = courseDescription;
    this.courseDuration = courseDuration;

    this.form.addEventListener("submit", this.submitHandler.bind(this));
  }

  private submitHandler(event: SubmitEvent): void {
    event.preventDefault();

    const course: Course = {
      id: crypto.randomUUID(),
      name: this.courseName.value,
      description: this.courseDescription.value,
      duration: this.courseDuration.value,
      status: "active",
    };

    this.onCourseCreated(course);
  }
}
