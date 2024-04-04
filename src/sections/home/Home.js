import Header from "../../components/header/Header";
import styles from './Home.module.scss';
import me from './me.png'
import {TypeAnimation} from 'react-type-animation';
import Lottie from 'react-lottie';
import * as animationData from './scroll-animation.json'
import video from './coding.mp4'

export default function Home(){
    return(
        <section id="home">
            <video className={styles.video} id="video" autoplay="true" muted="true" loop="true">
                <source src={video}/>
            </video>
            <div className={styles.container}>

                <div className={styles.first_child}>
                    <TypeAnimation
                        sequence={[
                            "Lázaro\nBodevan",
                            1000,
                            "Dev",
                            2000,
                            "",
                            100,
                            "Dev junior",
                            2000,
                            "Live",
                            1000,
                            "Solve",
                            1000,
                            "Play",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <div className={styles.second_child}>
                    <img src={me} className={styles.image}/>
                </div>

                <div className={styles.third_child}>
                    <ul>
                        <li className={styles.full}>fullstack</li>
                        <li className={styles.front}>frontend</li>
                        <li className={styles.back}>backend</li>
                        <li className={styles.mobi}>mobile</li>
                    </ul>
                </div>

                <div className={styles.fourth_child}>
                    <p>Sou Lázaro, tenho 23 anos. Sou bacharel em 
                        <span style={{color:"var(--primary4)"}}> ciência da computação </span> 
                        e apaixonado por resolver problemas através de código ;)
                    </p>
                    <br/>
                    <p>Sou um 
                        <span style={{color:"var(--primary4)"}}> desenvolvedor versátil</span>
                        , com uma stack bem diversa! Crio desde landing pages até aplicações 
                        completas (
                        <span style={{color:"var(--primary4)"}}>front</span>,
                        <span style={{color:"var(--primary4)"}}> back</span>, 
                        infra, devops...)
                    </p>
                </div>

                <div className={styles.fifth_child}>
                    <Lottie 
                        options={{
                            loop: true, 
                            autoplay:true, 
                            animationData:animationData
                        }}
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            

        </section>
    )
}