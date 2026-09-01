import type { Course } from "../models/Course";

export class TaskList {
  private activeTaskList: HTMLDivElement;
  private finishedTaskList: HTMLDivElement;

  private activeCount: HTMLSpanElement;
  private finishedCount: HTMLSpanElement;

  constructor() {
    const activeTaskList = document.querySelector<HTMLDivElement>("#activeTaskList");

    const finishedTaskList = document.querySelector<HTMLDivElement>("#finishedTaskList");

    const activeCount = document.querySelector<HTMLSpanElement>("#activeCount");

    const finishedCount = document.querySelector<HTMLSpanElement>("#finishedCount");

    if (!activeTaskList || !finishedTaskList || !activeCount || !finishedCount) {
      throw new Error("Task list elements not found");
    }

    this.activeTaskList = activeTaskList;
    this.finishedTaskList = finishedTaskList;

    this.activeCount = activeCount;
    this.finishedCount = finishedCount;
  }

  private createCourseCard(course: Course): HTMLDivElement {
    const card = document.createElement("div");

    card.className = "task-card";

    card.draggable = true;

    card.dataset.courseId = course.id;

    card.innerHTML = `<h3>${course.name}</h3>
                      <p>${course.description}</p>
                      <p class="duration">${course.duration}</p>
    `;

    return card;
  }

  render(courses: Course[]): void {
    this.activeTaskList.innerHTML = "";
    this.finishedTaskList.innerHTML = "";

    const activeCourses = courses.filter((course) => course.status === "active");

    const finishedCourses = courses.filter((course) => course.status === "finished");

    for (const course of activeCourses) {
      const card = this.createCourseCard(course);

      this.activeTaskList.appendChild(card);
    }

    for (const course of finishedCourses) {
      const card = this.createCourseCard(course);

      this.finishedTaskList.appendChild(card);
    }

    this.activeCount.textContent = String(activeCourses.length);

    this.finishedCount.textContent = String(finishedCourses.length);
  }
}
