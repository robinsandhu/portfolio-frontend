import React from 'react'
import './ProjectCard.css'

function ProjectCard({ projectTitle, content, techStack, gitLink, liveLink, displayMode }) {
    return (
        <div className='projectcard'>
            <div className={`nes-container is-rounded with-title ${displayMode ? "is-dark" : ""}`}>
                <p className='title'>{projectTitle}</p>
                <div className='projectcard-content'>
                    <p>
                        {content}
                    </p>
                    <p>
                        <b>Tech Stack:</b> {techStack} 
                    </p>
                    {
                        (gitLink || liveLink) ?
                            <div className='projectcard-content--footer'>
                            {
                                liveLink ?
                                <a target="_blank" href={liveLink} title="Live Link">
                                    <i className="nes-icon github "></i>
                                </a>
                                :
                                <></>
                            }
                            {
                                gitLink ?
                                <a target="_blank" href={gitLink} title="Github Link">
                                    <i className="nes-icon github "></i>
                                </a>
                                :
                                <></>
                            }
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
