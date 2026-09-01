import type { Course } from "../models/Course";

export class DragDrop {
  private draggedCourseId: string | null = null;

  constructor(private onCourseDrop: (courseId: string, status: Course["status"]) => void) {
    document.addEventListener("dragstart", this.handleDragStart);

    document.addEventListener("dragover", this.handleDragOver);

    document.addEventListener("drop", this.handleDrop);

    document.addEventListener("dragend", this.handleDragEnd);
  }

  private handleDragStart = (event: DragEvent): void => {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".task-card");

    if (!card) {
      return;
    }

    this.draggedCourseId = card.dataset.courseId ?? null;

    card.classList.add("dragging");
  };

  private handleDragOver = (event: DragEvent): void => {
    const list = (event.target as HTMLElement).closest<HTMLElement>(".task-list");

    if (!list) {
      return;
    }

    event.preventDefault();
  };

  private handleDrop = (event: DragEvent): void => {
    event.preventDefault();

    const list = (event.target as HTMLElement).closest<HTMLElement>(".task-list");

    if (!list) {
      return;
    }

    if (!this.draggedCourseId) {
      return;
    }

    let status: Course["status"];

    if (list.id === "activeTaskList") {
      status = "active";
    } else {
      status = "finished";
    }

    this.onCourseDrop(this.draggedCourseId, status);
  };

  private handleDragEnd = (event: DragEvent): void => {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".task-card");

    if (!card) {
      return;
    }

    card.classList.remove("dragging");

    this.draggedCourseId = null;
  };
}
