import { useState, createContext } from "react";
import uuid from "react-uuid";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      title: "Learn JS",
      description: "var vs let/const",
      priority: "low",
      id: uuid(),
      category: "JS",
      status: "todo",
    },
    {
      title: "Learn JS",
      description: "Promises, async/await",
      priority: "high",
      id: uuid(),
      category: "JS",
      status: "todo",
    },
    {
      title: "Learn JS",
      description: "Functional Programming in JS",
      priority: "high",
      id: uuid(),
      category: "JS",
      status: "doing",
    },
    {
      title: "Learn JS",
      description: "Data types",
      priority: "high",
      id: uuid(),
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
