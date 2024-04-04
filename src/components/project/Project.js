import styles from './Project.module.scss'
import Lottie from 'react-lottie';
import * as animationData from './click-animation.json'
import { useState, useEffect } from 'react';
import ProjectModal from '../project-modal/ProjectModal';

export default function Project({project}){

    var [isModalVisible, setIsModalVisible] = useState(false);

    function handleModalVisible(){
        setIsModalVisible(!isModalVisible);
        console.log(isModalVisible)
    }

    useEffect(() => {
        function handleKeyPress(event) {
            if (event.keyCode === 27) {
                setIsModalVisible(false);
            }
        }

        function handlePopState(){
            setIsModalVisible(false);
        }

        document.addEventListener("keydown", handleKeyPress);
        window.addEventListener("popstate", handlePopState)

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("popstate", handlePopState);
        };
    }, []); 

    return(
        <>
            {
                isModalVisible && <ProjectModal project={project} isVisible={isModalVisible} onclose={()=> setIsModalVisible(false)}/>
            }
            <div className={styles.wrapper} onClick={handleModalVisible}>
                <div className={styles.container} key={project.id}>
                    <h4>{project.name}</h4>
                    <p>{project.briefing}</p>
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
        </>
    )
}