import styles from './Project.module.scss'
import Lottie from 'react-lottie';
import * as animationData from './click-animation.json'

export default function Project({name, desc}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.container} key={name}>
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>
            <div className={styles.lottie}>
                <Lottie 
                    options={{
                        loop: true, 
                        autoplay:true, 
                        animationData:animationData
                    }}
                    style={{width:"100%", height:"100%"}}

                />
            </div>
        </div>
    )
}