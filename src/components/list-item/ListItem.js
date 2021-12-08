import LinkButton from "../link/Link";
import styles from "./list-item.module.scss";

export default function ListItem ({
    todo
}) {

    const { id, title, done, important } = todo ;

    const opacity = done ? "30%" : "100%"

    const style = {
        opacity:opacity
    };
    
    return (
        <div className={styles.container} style={style}>
            <div className={styles.input}>
                <input type="checkbox" id={id} name={id} defaultChecked={done}/>
                <label for={id}>{title}</label>   
            </div>
            <LinkButton title="See More" href={`/todo/${id}`}/> 
            { important &&  <span>!!!</span> }
        </div>
    );
}
