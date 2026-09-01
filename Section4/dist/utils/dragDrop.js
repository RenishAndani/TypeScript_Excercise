export class DragDrop {
    onCourseDrop;
    draggedCourseId = null;
    constructor(onCourseDrop) {
        this.onCourseDrop = onCourseDrop;
        document.addEventListener("dragstart", this.handleDragStart);
        document.addEventListener("dragover", this.handleDragOver);
        document.addEventListener("drop", this.handleDrop);
        document.addEventListener("dragend", this.handleDragEnd);
    }
    handleDragStart = (event) => {
        const card = event.target.closest(".task-card");
        if (!card) {
            return;
        }
        this.draggedCourseId = card.dataset.courseId ?? null;
        card.classList.add("dragging");
    };
    handleDragOver = (event) => {
        const list = event.target.closest(".task-list");
        if (!list) {
            return;
        }
        event.preventDefault();
    };
    handleDrop = (event) => {
        event.preventDefault();
        const list = event.target.closest(".task-list");
        if (!list) {
            return;
        }
        if (!this.draggedCourseId) {
            return;
        }
        let status;
        if (list.id === "activeTaskList") {
            status = "active";
        }
        else {
            status = "finished";
        }
        this.onCourseDrop(this.draggedCourseId, status);
    };
    handleDragEnd = (event) => {
        const card = event.target.closest(".task-card");
        if (!card) {
            return;
        }
        card.classList.remove("dragging");
        this.draggedCourseId = null;
    };
}
//# sourceMappingURL=dragDrop.js.map