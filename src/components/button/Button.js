import styles from "./button.module.scss";

export default function ActionButton ({title, classname, ...props}) {

    return (
        <button {...props} className={`${styles.btn} ${classname}`}>{title}</button>
    );
}

