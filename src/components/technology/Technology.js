import styles from './Technology.module.scss'

export default function Technology({name, icon}){
    return(
        <div className={styles.container}>
            <img src={icon}/>
            <p>{name}</p>
        </div>
    )
}