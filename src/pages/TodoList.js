import todos from "../data/todos";
import ListItem from '../components/list-item/ListItem';


export default function TodoList () {

  const doneItems = todos.filter(item => item.done === true);
  const todoItems = todos.filter(item => item.done === false);

  return (
    <>
      <header className="App-header">
        <h1>To-Doums</h1>
      </header>
      <main>
        {todoItems.map((item) => (
          <ListItem key={item.id} todo={item}/>
        ))}
        {doneItems.map((item) => (
          <ListItem key={item.id} todo={item}/>
        ))}
      </main>
    </>
  );
}
