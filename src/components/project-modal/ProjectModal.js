import styles from './ProjectModal.module.scss'
import video from '../../sections/home/coding.mp4'
import TechnologyTile from '../technology-tile/TechnologyTile'
import githubIcon from '../../components/header/github-icon.png'
import linkedinIcon from '../../components/header/linkedin-icon.png'
import React from 'react'

export default function ProjectModal({project, isVisible, onclose}){

    return(
        <div className={`${styles.container} ${isVisible ? styles.visible : ""}`}>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{project.name}</h1>
                    <div className={styles.closebtn} onClick={onclose}>
                        X
                    </div>
                </div>
                <video className={styles.video} controls>
                    <source src={project.video}/>
                </video>
                <div className={styles.description}>
                    <h3>Descrição</h3>
                    <p className={styles.text}>{project.description}</p>
                </div>
                <div className={styles.technologies}>
                    <h3>Tecnologias</h3>
                    <div className={styles.wrapper}>
                        {
                            project.technologies.map(item =>{
                                return <TechnologyTile name={item}/>;
                            })
                        }
                    </div>
                </div>
                <div className={styles.links}>
                    <h3>Links úteis</h3>
                    <div className={styles.wrapper}>
                        <a href={project.github} target='_blank'>
                            <img src={githubIcon}/>
                            <p>Github</p>
                        </a>
                        <a href={project.linkedin} target='_blank'>
                            <img src={linkedinIcon}/>
                            <p>Linkedin</p>
                        </a>
                    </div>
                </div>
                <div>
                    <h3>Status</h3>
                    <p>{project.status}  -   {project.date}</p>
                </div>
            </div>

        </div>
    )
}