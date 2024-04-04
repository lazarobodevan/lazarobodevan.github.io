import styles from './Contact.module.scss'
import whatsapp from './icons/whatsapp.png'
import linkedin from '../../components/header/linkedin-icon.png'
import email from './icons/mail.png'

import { useState } from 'react'

export default function Contact(){

    const [copied, setCopied] = useState(false);

    function handleCopyToClipboard(){
        navigator.clipboard.writeText("lazarobodevan@gmail.com").then(()=> setCopied(true));
    }

    return(
        <section id='contact' className={styles.container}>
            <h1>ENTRE EM CONTATO!</h1>

            <div className={styles.wrapper}>
                <a className={styles.contact} href='https://wa.me/5528999450991' target='_blank'>
                    <img src={whatsapp}/>
                    <span>Whatsapp</span>
                </a>

                <a className={styles.contact} href='https://www.linkedin.com/in/lazaro-bodevan/' target='_blank'>
                    <img src={linkedin}/>
                    <span>Linkedin</span>
                </a>
            </div>
            <div className={styles.email} onClick={handleCopyToClipboard}>
                <img src={email}/>
                lazarobodevan@gmail.com
            </div>
            {
                copied && <span style={{color:"var(--primary4)"}}>Email copiado para a área de transferência. Aguardo sua mensagem!</span>
            }


        </section>
    )
}