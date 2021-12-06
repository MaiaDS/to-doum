import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import TodoList from "./pages/TodoList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />}/>
        <Route path="/todo/:id" element={<Todo />}/>
      </Routes>
    </BrowserRouter>
  );
}
