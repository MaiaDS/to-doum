import './style/App.scss';
import todos from "./data/todos";
import ListItem from './components/list-item/ListItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Doums</h1>
      </header>
      <main>
        {todos.map((todo) => (
          <ListItem key={todo.id} title={todo.title} done={todo.done} urgent={todo.urgent}/>
        ))}
      </main>
    </div>
  );
}

export default App;
