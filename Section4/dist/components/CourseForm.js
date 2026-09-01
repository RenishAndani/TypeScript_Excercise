export class CourseForm {
    onCourseCreated;
    form;
    courseName;
    courseDescription;
    courseDuration;
    constructor(onCourseCreated) {
        this.onCourseCreated = onCourseCreated;
        const form = document.querySelector("#courseForm");
        if (!form) {
            throw new Error("course form not found");
        }
        this.form = form;
        const courseName = document.querySelector("#courseName");
        const courseDescription = document.querySelector("#courseDescription");
        const courseDuration = document.querySelector("#courseDuration");
        if (!courseName || !courseDescription || !courseDuration) {
            throw new Error("Course form field is not found");
        }
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseDuration = courseDuration;
        this.form.addEventListener("submit", this.submitHandler.bind(this));
    }
    submitHandler(event) {
        event.preventDefault();
        const course = {
            id: crypto.randomUUID(),
            name: this.courseName.value,
            description: this.courseDescription.value,
            duration: this.courseDuration.value,
            status: "active",
        };
        this.onCourseCreated(course);
    }
}
//# sourceMappingURL=CourseForm.js.map