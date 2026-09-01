import type { Course } from "../models/Course";
export declare class CourseForm {
    private onCourseCreated;
    private form;
    private courseName;
    private courseDescription;
    private courseDuration;
    constructor(onCourseCreated: (course: Course) => void);
    private submitHandler;
}
//# sourceMappingURL=CourseForm.d.ts.map