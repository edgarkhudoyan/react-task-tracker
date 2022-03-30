import { useContext, useState } from "react";
import { TaskContext } from "../../TaskContext";

const AddTask = () => {
  const [tasks, setTasks] = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateDesc = (e) => {
    setDescription(e.target.value);
  };
  const updateStatus = (e) => {
    setStatus(e.target.value);
  };
  const updatePriority = (e) => {
    setPriority(e.target.value);
  };

  const AddTask = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        title,
        description,
        status,
        priority,
        category: "JS",
      },
    ]);
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
  };

  return (
    <form onSubmit={AddTask}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={updateTitle}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={updateDesc}
      />
      <input
        type="text"
        placeholder="Status"
        name="status"
        value={status}
        onChange={updateStatus}
      />
      <input
        type="text"
        placeholder="Priority"
        name="priority"
        value={priority}
        onChange={updatePriority}
      />
      <button>Add Task</button>
    </form>
  );
};

export default AddTask;
