import Project from '../../components/project/Project'
import styles from './Projects.module.scss'
import {projects} from './projectsData'

export default function Projects(){
    return(
        <section className={styles.container} id='projs'>
            <h1>&lt;Projetos&gt;</h1>
            <div className={styles.projs}>
                {
                    projects.map(item =>{                        
                        return <Project project={item}/>
                    })
                }
            </div>
        </section>
    )
}