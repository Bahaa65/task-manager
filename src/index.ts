import readline from "readline";
import { TaskService } from "./services/TaskService";
import { FileManager } from "./utils/FileManager";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = FileManager.loadTasks();
const taskService = new TaskService(tasks);

function showMenu() {
  console.log("\nTask Manager CLI");
  console.log("1. Add Task");
  console.log("2. List Tasks");
  console.log("3. Mark Task as Completed");
  console.log("4. Delete Task");
  console.log("5. Exit");
  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option: string) {
  switch (option) {
    case "1":
      rl.question("Enter task title: ", (title) => {
        taskService.addTask(title);
        FileManager.saveTasks(taskService.listTasks());
        console.log(`Task "${title}" added!`);
        showMenu();
      });
      break;
    case "2":
      console.log("\nTasks:");
      taskService.listTasks().forEach(task => {
        console.log(`[${task.id}] ${task.completed ? "✅" : "❌"} ${task.title}`);
      });
      showMenu();
      break;
    case "3":
      rl.question("Enter task ID to mark as completed: ", (id) => {
        if (taskService.markTaskCompleted(Number(id))) {
          FileManager.saveTasks(taskService.listTasks());
          console.log(`Task ${id} marked as completed.`);
        } else {
          console.log("Task not found.");
        }
        showMenu();
      });
      break;
    case "4":
      rl.question("Enter task ID to delete: ", (id) => {
        if (taskService.deleteTask(Number(id))) {
          FileManager.saveTasks(taskService.listTasks());
          console.log(`Task ${id} deleted.`);
        } else {
          console.log("Task not found.");
        }
        showMenu();
      });
      break;
    case "5":
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("Invalid option.");
      showMenu();
  }
}

showMenu();
