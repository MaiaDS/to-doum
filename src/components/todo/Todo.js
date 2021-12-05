import styles from "./todo.module.scss";

export default function Todo ({
    key, 
    title,
    done,
    urgent
}) {

    const checkTitle = title ? title : "Sans titre";
    const opacity = done ? "50%" : "100%"

    const style = {
        opacity:opacity
    };
    
    return (
        <div className={styles.container} style={style}>
            <div className={styles.input}>
                <input type="checkbox" id={key} name={key} defaultChecked={done}/>
                <label for={key}>{checkTitle}</label>
            </div>
            { urgent ? <span>!!!</span> : null }
        </div>
    );
}
