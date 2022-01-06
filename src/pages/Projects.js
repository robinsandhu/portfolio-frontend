import React from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects({ displayMode }) {
    return (
        <div className='projects'>
            <div className={`nes-container with-title projects-container ${displayMode ? "is-dark" : ""}`}>
                <p className='title'>My Projects</p>
                <div className={`nes-container is-rounded with-title ${displayMode ? "is-dark" : ""}`}>
                    <p className='title'>UDP Proxy</p>
                    <div className='projects-content'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
