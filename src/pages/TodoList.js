import todos from "../data/todos";
import ListItem from '../components/list-item/ListItem';


export default function TodoList () {
  return (
    <>
      <header className="App-header">
        <h1>To-Doums</h1>
      </header>
      <main>
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo}/>
        ))}
      </main>
    </>
  );
}
