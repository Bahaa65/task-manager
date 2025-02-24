# 📝 Task Manager CLI

A simple **command-line task manager** built with **TypeScript**. This project allows users to manage their tasks via a CLI interface, with features like adding, listing, completing, and deleting tasks. The tasks are stored in a JSON file for persistence.

---

## 🚀 Features
✅ Add tasks  
✅ List tasks  
✅ Mark tasks as completed  
✅ Delete tasks  
✅ Persistent storage using JSON  
✅ Fully implemented in **TypeScript**  

---

## 💂️ Project Structure
```
task-manager-cli/
│️— node_modules/
│️— package.json
│️— tsconfig.json
│️— tasks.json  (Stores tasks)
│️— src/
│   ├️— index.ts  (CLI Interface)
│   ├️— models/
│   │   ├️— Task.ts  (Task Model)
│   ├️— services/
│   │   ├️— TaskService.ts  (Handles task operations)
│   ├️— utils/
│   │   ├️— FileManager.ts  (Handles file storage)
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Bahaa65/task-manager.git
cd task-manager-cli
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the CLI Task Manager
```sh
npx ts-node src/index.ts
```

---

## 📝 Usage Guide

### 💜 Show Menu
When you run the program, you will see:
```
Task Manager CLI
1. Add Task
2. List Tasks
3. Mark Task as Completed
4. Delete Task
5. Exit
Choose an option:
```

### ✨ Add a Task
Choose **option 1** and enter a task title:
```
Enter task title: Learn TypeScript
Task "Learn TypeScript" added!
```

### 📋 List Tasks
Choose **option 2** to view tasks:
```
Tasks:
[1] ❌ Learn TypeScript
```

### ✅ Mark Task as Completed
Choose **option 3** and enter the task ID:
```
Enter task ID to mark as completed: 1
Task 1 marked as completed.
```
Now, listing tasks will show:
```
Tasks:
[1] ✅ Learn TypeScript
```

### ❌ Delete a Task
Choose **option 4** and enter the task ID:
```
Enter task ID to delete: 1
Task 1 deleted.
```

---

## 🏰 Built With
- **TypeScript** (Strict Mode)
- **Node.js**
- **Readline Module** (for CLI interaction)
- **File System Module** (for saving tasks)

---

## 🤝 Contributing
Want to improve this project? Feel free to **fork** the repo and submit a **pull request**.

1. **Fork** the project  
2. **Create a branch** (`git checkout -b feature-branch`)  
3. **Commit your changes** (`git commit -m "Add feature X"`)  
4. **Push to the branch** (`git push origin feature-branch`)  
5. **Open a Pull Request**  

---

## 📝 License
This project is licensed under the **MIT License**.

---

## 🌟 Show Support
If you like this project, give it a ⭐ on GitHub!  
Happy coding! 🚀🔥

