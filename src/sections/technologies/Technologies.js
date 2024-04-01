import Project from '../../components/project/Project';
import Technology from '../../components/technology/Technology';
import styles from './Technologies.module.scss'
import html from './images/html5.svg';
import css from './images/css3.svg'
import ra from './images/react.svg'
import angular from './images/angular.svg'
import js from './images/javascript.svg'
import node from './images/nodejs.svg'
import csharp from './images/csharp.svg'
import ts from './images/typescript.svg'
import postgres from './images/postgre.svg'
import mongo from './images/mongodb.svg'
import flutter from './images/flutter.svg'
import cypress from './images/cypress.svg'
import jest from './images/jest-js-icon.svg'
import docker from './images/docker.svg'
import figma from './images/figma.svg'

export default function Technologies(){

    let tecnologies = [
        {
            name: "HTML",
            icon: html
        },
        {
            name: "CSS/SASS",
            icon: css
        },
        {
            name: "ReactJs",
            icon: ra
        },
        {
            name: "Angular",
            icon: angular
        },
        {
            name: "Javascript",
            icon: js
        },
        {
            name: "NodeJs",
            icon: node
        },
        {
            name: "C#/ASP.Net",
            icon: csharp
        },
        {
            name: "Typescript",
            icon: ts
        },
        {
            name: "PostgreSQL",
            icon: postgres
        },
        {
            name: "MongoDB",
            icon: mongo
        },
        {
            name: "Flutter",
            icon: flutter
        },
        {
            name: "Cypress",
            icon: cypress
        },
        {
            name: "Jest",
            icon: jest
        },
        {
            name: "Docker",
            icon: docker
        },
        {
            name: "Figma",
            icon: figma
        },
        
    ]

    return(
        <section className={styles.container} id="tecs">
            <h1>&lt;Tecnologias&gt;</h1>

            <main className={styles.projects}>
                {
                    tecnologies.map(item =>{
                        let name = item.name;
                        let icon = item.icon;
                        return Technology({name, icon})
                    })
                }
            </main>
        </section>
    )
}