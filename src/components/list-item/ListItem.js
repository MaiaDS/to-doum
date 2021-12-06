// import LinkButton from "../link/Link";
import styles from "./list-item.module.scss";

export default function ListItem ({
    key, 
    title,
    done,
    urgent
}) {

    const checkTitle = title ? title : "Sans titre";
    const opacity = done ? "30%" : "100%"

    const style = {
        opacity:opacity
    };
    
    return (
        <div className={styles.container} style={style}>
            <div className={styles.input}>
                <input type="checkbox" id={key} name={key} defaultChecked={done}/>
                <label for={key}>{checkTitle}</label>   
            </div>
            {/* <LinkButton title="See More" href="/"/>  */}
            { urgent ? <span>!!!</span> : null }
        </div>
    );
}
