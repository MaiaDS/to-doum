import { Routes, Route, HashRouter } from "react-router-dom";
import Todo from "./pages/Todo";
import TodoList from "./pages/TodoList";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TodoList />}/>
        <Route path="/todo/:id" element={<Todo />}/>
      </Routes>
    </HashRouter>
  );
}
