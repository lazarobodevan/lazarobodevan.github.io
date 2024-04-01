import styles from './Header.module.scss';
import { useEffect } from 'react';
export default function Header({activeSection}){

    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a href='#home' className={activeSection == "home" ? styles.active : ""}>&lt;home&gt;</a>
                <a href='#tecs' className={activeSection == "tecs" ? styles.active : ""}>&lt;tecnologias&gt;</a>
                <a href='#projs' className={activeSection == "projs" ? styles.active : ""}>&lt;projetos&gt;</a>
            </nav>
            <div className={styles.button}>
                Entre em contato
            </div>
        </div>
    )
}