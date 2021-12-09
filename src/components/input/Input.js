import styles from "./input.module.scss";

export default function Input ({type, name, label, ...props}) {

    return (
        <>
            { type !== "checkbox" ? 
                <div className={styles.input}>
                    <label htmlFor={name}>{label}</label> 
                    { type === "textarea" ? 
                        <textarea id={name} name={name} {...props}></textarea>
                    :
                        <input type={type} name={name} id={name} {...props}/>
                    }
                    
                </div>

            : 
                <div className={styles.checkbox}>
                    <input type={type} name={name} id={name} {...props}/>
                    <label htmlFor={name}>{label}</label>
                </div>
            }
        </>
    );
}

