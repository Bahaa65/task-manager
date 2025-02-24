import { Task } from "../models/Task";

export class TaskService {
  private tasks: Task[] = [];

  constructor(initialTasks?: Task[]) {
    this.tasks = initialTasks || [];
  }

  addTask(title: string): Task {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
      createdAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  listTasks(): Task[] {
    return this.tasks;
  }

  markTaskCompleted(id: number): boolean {
    const task = this.tasks.find(task => task.id === id);
    if (!task) return false;
    task.completed = true;
    return true;
  }

  deleteTask(id: number): boolean {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }
}
