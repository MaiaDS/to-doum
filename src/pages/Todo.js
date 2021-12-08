import { useParams } from "react-router-dom";
import HomeButton from "../components/link/HomeButton";
import todos from "../data/todos";
import styles from '../style/todo.module.scss';

export default function Todo () {

    const { id } = useParams();

    const { title, description, important, done } = todos.find(item => item.id === id)

    return (
        <div className={styles.container}>
            <HomeButton classname={styles.link}/> 
            { (important || done ) && 
                <div className={styles.tags}>
                    { important &&  <span className={styles.important}>important</span> }
                    { done &&  <span className={styles.done}>This task is done</span> }
                </div>
            }
            <h1>{title}</h1>
            <p>{description}</p>
            
        </div>
    );
}
