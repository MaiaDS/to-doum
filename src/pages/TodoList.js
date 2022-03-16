import { useState } from "react";
import AddPanel from "../components/add-panel/AddPanel";
import ActionButton from "../components/button/Button";
import ListItem from '../components/list-item/ListItem';
import todos from "../data/todos";
import styles from "../style/list.module.scss"

export default function TodoList () {

  const [todoList, setTodoList] = useState(todos);
  const [isDisplayed, setIsDisplayed] = useState(false);


  const addTodo = (todo) => {
    if (todo.title !== "") {
      setTodoList([todo, ...todoList])
    }
  }

  const doneItems = todoList.filter(item => item.done);
  const todoItems = todoList.filter(item => !item.done);


  const compare = (todoA, todoB) => {
    if (todoA.important === todoB.important) return 0
    if (todoA.important) return -1
    return 1
  }

  const sortedList = todoItems.sort(compare).concat(doneItems); 

  const changeTodoState = (id, checked) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, done : checked};
      return todo ;
    })
    setTodoList(updatedTodoList);
  }

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
          {sortedList.map((item) => (
            <ListItem key={item.id} todo={item} handleChange={() => changeTodoState(item.id, !item.done)}/>
          ))}
        </section>
        { isDisplayed && <AddPanel addTodo={addTodo} handleClose={() => setIsDisplayed(false)}/> }
      </main>
    </>
  );
}
