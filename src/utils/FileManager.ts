import fs from "fs";
import { Task } from "../models/Task";

export class FileManager {
  static saveTasks(tasks: Task[], filePath: string = "tasks.json"): void {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  }

  static loadTasks(filePath: string = "tasks.json"): Task[] {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data) as Task[];
  }
}
