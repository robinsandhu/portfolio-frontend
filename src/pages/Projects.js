import React from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects({ displayMode }) {
    return (
        <div className='projects'>
            <div className={`nes-container with-title projects-container ${displayMode ? "is-dark" : ""}`}>
                <p className='title'>My Projects</p>
            </div>
        </div>
    )
}

export default Projects
