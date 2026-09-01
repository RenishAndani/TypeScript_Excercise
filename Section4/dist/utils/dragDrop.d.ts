import type { Course } from "../models/Course";
export declare class DragDrop {
    private onCourseDrop;
    private draggedCourseId;
    constructor(onCourseDrop: (courseId: string, status: Course["status"]) => void);
    private handleDragStart;
    private handleDragOver;
    private handleDrop;
    private handleDragEnd;
}
//# sourceMappingURL=dragDrop.d.ts.map