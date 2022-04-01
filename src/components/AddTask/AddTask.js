import { useContext, useState } from "react";
import { TaskContext } from "../../TaskContext";
import { useStyles } from "./styles";
import uuid from "react-uuid";

const AddTask = () => {
  const styles = useStyles();

  const [tasks, setTasks] = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateDesc = (e) => {
    setDescription(e.target.value);
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
        priority,
        id: uuid(),
        category: "JS",
        status: "todo",
      },
    ]);
    setTitle("");
    setDescription("");
    setPriority("");
  };

  const toggleAddTask = () => setIsVisible(!isVisible);

  return (
    <div>
      <button className={styles.addTask} onClick={toggleAddTask}>
        Add Task
      </button>

      {isVisible ? (
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={AddTask}>
            <input
              className={styles.input}
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={updateTitle}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={updateDesc}
            />

            <select
              required
              className={styles.status}
              name="priority"
              value={priority}
              onChange={updatePriority}
            >
              <option value="" selected disabled hidden>
                Priority
              </option>

              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button className={styles.addTodo} type="submit">
              Add Todo
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddTask;
