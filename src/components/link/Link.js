import { Link } from "react-router-dom";
import styles from "./link.module.scss";
import "./link-colors.scss";

export default function LinkButton ({
    href,
    title,
    color,
    classname
}) {

    const checkColor = color === "green" || color === "red" || color === "dark" ? color : "default" ;

    return (
        <Link
            to={href}
            className={`${styles.link} ${checkColor} ${classname}`}
        >
            {title}
        </Link>
    );
}

