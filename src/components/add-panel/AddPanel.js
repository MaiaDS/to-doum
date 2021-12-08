import { useState } from "react";
import ActionButton from "../button/Button";
import Input from "../input/Input";
import styles from "./add-panel.module.scss";

export default function AddPanel ({addTodo, handleClose}) {

    const [formValues, setFormValues] = useState({title : "", description : "", important : false});

    const handleInputChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormValues({ ...formValues, [event.target.name] : value });
    }

    const createTodo = () => {
        return {
            id : JSON.stringify(Date.now()),
            done: false,
            ...formValues
        }
    }
    
    return (
        <aside className={styles.container}>
            <ActionButton 
                title="Close"
                onClick={handleClose}
                classname={styles.close}
            />
            <h2>Add To-do</h2>
            <form>
                <Input 
                    type="text" 
                    label="Title" 
                    name="title" 
                    placeholder="Title..." 
                    required 
                    value={formValues.title}
                    onChange={handleInputChange}
                />
                <Input 
                    type="textarea" 
                    name="description" 
                    rows="10" 
                    placeholder="Add your description...."
                    value={formValues.description}
                    onChange={handleInputChange}
                />
                <Input 
                    type="checkbox" 
                    name="important" 
                    label="Important" 
                    checked={formValues.important}
                    onChange={handleInputChange}
                />
            </form>
            <ActionButton title="Add Todo" classname={styles.add} onClick={ () => addTodo(createTodo())}/>
        </aside>
    );
}
