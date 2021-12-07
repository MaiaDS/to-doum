import { useParams } from "react-router-dom";
import HomeButton from "../components/link/HomeButton";
import todos from "../data/todos";
import styles from '../style/todo.module.scss';

export default function Todo () {

    const { id } = useParams();

    const { title, description, urgent, done } = todos.find(item => item.id === id)

    return (
        <div className={styles.container}>
            <HomeButton classname={styles.link}/> 
            { urgent || done ?
                <div className={styles.tags}>
                    { urgent ? <span className={styles.urgent}>Urgent</span> : null }
                    { done ? <span className={styles.done}>This task is done</span> : null }
                </div>
            : null }
            <h1>{title}</h1>
            <p>{description}</p>
            
        </div>
    );
}
