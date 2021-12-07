import LinkButton from "./Link";
import styles from "./link.module.scss";

export default function HomeButton ({classname}) {

    return (
        <LinkButton title="Home" href="/" color="dark" classname={`${styles.home} ${classname}`}/> 
    );
}

