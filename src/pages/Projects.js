import React from 'react'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects({ displayMode }) {
    return (
        <div className='projects'>
            <div className={`nes-container with-title projects-container ${displayMode ? "is-dark" : ""}`}>
                <p className='title'>My Projects</p>
                <ProjectCard 
                    projectTitle="Portfolio Website"
                    content="A responsive portfolio website designed to work on both mobile phones and desktop for showcasing my project work and work experience."
                    techStack="ReactJS, ExpressJS, NodeJS, Heroku"
                    gitLink="https://github.com/robinsandhu/DoublePendulumPRNG"
                    displayMode={displayMode}
                />
                <hr />
                <ProjectCard 
                    projectTitle="P2P Mortgage Loans"
                    content="A prototype based project for P2P mortgage loan system based on smart mortgage contracts of ethereum blockchain network. Developed an interactive frontend for letting the borrowers/lenders to carry out transactions on blockchain. System uses web3 for making rpc calls to the blockchain network for carrying out the tranasctional logic. Check out github for additional information"
                    techStack="ReactJS, Solidity, TruffleJS, NodeJS, Pinata, Web3"
                    gitLink="https://github.com/robinsandhu/DoublePendulumPRNG"
                    displayMode={displayMode}
                />
                <hr />
                <ProjectCard 
                    projectTitle="UDP Proxy"
                    content="A custom UDP proxy implemented in python for parsing network traffic of minetest game.
                    Provided with a parser script for adding custom parsing logic."
                    techStack="Python"
                    gitLink="https://github.com/robinsandhu/UDP-Proxy"
                    displayMode={displayMode}
                />
                <hr />
                <ProjectCard 
                    projectTitle="Double Pendulum PRNG"
                    content="Implemented a paper(check github for link) for generating a Psuedo Random Number Generator using Double Pendulum (Dynamic Chaotic System). Also created a visualizer dashboard for visualizing the behaviour of the system under different initial settings."
                    techStack="JavaScript, CSS, CPP"
                    gitLink="https://github.com/robinsandhu/DoublePendulumPRNG"
                    displayMode={displayMode}
                />
                <hr />
                <ProjectCard 
                    projectTitle="ML Twitter Bot"
                    content="An ML Twitter bot for determining whether a twitter account is a bot or not."
                    techStack="Python, Random Forest Classifier, Sklearn"
                    gitLink="https://github.com/robinsandhu/ML-Twitter-Bot"
                    displayMode={displayMode}
                />
            </div>
        </div>
    )
}

export default Projects
