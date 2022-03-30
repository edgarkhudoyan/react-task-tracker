import { useState, createContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      title: "Learn JS",
      description: "var vs let/const",
      priority: "medium",
      id: 1,
      category: "JS",
      status: "todo",
    },
    {
      title: "Learn JS",
      description: "Promises, async/await",
      priority: "high",
      id: 2,
      category: "JS",
      status: "todo",
    },
    {
      title: "Learn JS",
      description: "Functional Programming in JS",
      priority: "high",
      id: 3,
      category: "JS",
      status: "doing",
    },
    {
      title: "Learn JS",
      description: "Data types",
      priority: "high",
      id: 4,
      category: "JS",
      status: "done",
    },
  ]);
  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {children}
    </TaskContext.Provider>
  );
};
