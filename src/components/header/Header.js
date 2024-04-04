import styles from './Header.module.scss';
import { useEffect } from 'react';

import github from './github-icon.png'
import linkedin from './linkedin-icon.png'


export default function Header({activeSection}){

    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <a href='#home' className={activeSection == "home" ? styles.active : ""}>&lt;home&gt;</a>
                <a href='#tecs' className={activeSection == "tecs" ? styles.active : ""}>&lt;tecnologias&gt;</a>
                <a href='#projs' className={activeSection == "projs" ? styles.active : ""}>&lt;projetos&gt;</a>
            </nav>
            <div className={styles.contact}>
                <a href='https://github.com/lazarobodevan' target='_blank'>
                    <img src={github}/>
                </a>
                <a href='https://www.linkedin.com/in/lazaro-bodevan/' target='_blank'>
                    <img src={linkedin}/>
                </a>
                <a className={styles.button} href='#contact'>
                    Entre em contato
                </a>
            </div>
        </div>
    )
}