import { Link } from "react-router-dom";
import styles from "./link.module.scss";

export default function LinkButton ({
    href,
    title
}) {

    return (
        <Link
            to={href}
            className={styles.link}
        >
            {title}
        </Link>
    );
}

