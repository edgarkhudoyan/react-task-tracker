// Import TaskContext
import { TaskProvider } from "./TaskContext";
// Import Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import Boards from "./pages/Boards";
import TaskLists from "./pages/TaskLists";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards" element={<Boards />} />
            <Route path="/boards/js" element={<TaskLists />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </div>
  );
}

export default App;
