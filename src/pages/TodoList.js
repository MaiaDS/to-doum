import { useEffect, useState } from "react";
import AddPanel from "../components/add-panel/AddPanel";
import ActionButton from "../components/button/Button";
import ListItem from '../components/list-item/ListItem';
import todos from "../data/todos";
import styles from "../style/list.module.scss"

export default function TodoList () {

  const [todoList, setTodoList] = useState(todos);
  const [isDisplayed, setIsDisplayed] = useState(false);


  const addTodo = (todo) => {
    setTodoList([...todoList, todo])
  }

  const doneItems = todoList.filter(item => item.done === true);
  const todoItems = todoList.filter(item => item.done === false);

  return (
    <>
      <header className={styles.header}>
        <h1>To-Doums</h1>
        <ActionButton 
          title="Add new todo"
          onClick={() => setIsDisplayed(true)}
        />
      </header>
      <main className={styles.container}>
        <section style={isDisplayed ? {width:"50%"} : {width:"100%"}}>
          {todoItems.map((item) => (
            <ListItem key={item.id} todo={item}/>
          ))}
          {doneItems.map((item) => (
            <ListItem key={item.id} todo={item}/>
          ))}
        </section>
        { isDisplayed && <AddPanel addTodo={addTodo} handleClose={() => setIsDisplayed(false)}/> }
      </main>
      
    </>
  );
}
