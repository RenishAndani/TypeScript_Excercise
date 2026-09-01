import type { Course } from "../models/Course";
export declare class TaskList {
    private activeTaskList;
    private finishedTaskList;
    private activeCount;
    private finishedCount;
    constructor();
    private createCourseCard;
    render(courses: Course[]): void;
}
//# sourceMappingURL=TaskList.d.ts.map