import styles from './TechnologyTile.module.scss'

export default function TechnologyTile({name}){
    return(
        
        <div className={styles.container}>
            <span>{name}</span>
        </div>
    )
}