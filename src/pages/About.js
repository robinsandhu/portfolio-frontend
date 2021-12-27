import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about">
            <div className='nes-container with-title about-container'>
                <p className='title'>
                    <i className="nes-icon is-small heart"></i>
                    About Me
                    <i className="nes-icon is-small heart"></i>
                </p>
                <h5>
                    Hi this is robin and this is some random text
                </h5>
                <div className='about-section about-experience'>
                    <h3 className='about-section-heading'>
                        Experience
                    </h3>
                    <h5>ZScaler - Dev Intern <span className='time-span'>June 2021 - Sep 2021</span></h5>
                    <ul>
                        <li>Wrote Rest API endpoints in JAVA Jersey framework for implementing the functionality of the features.</li>
                        <li>Wrote SQL queries in the Java API endpoints for fetching out the relevant info from the MySQl database.</li>
                        <li>Worked on modularizing the main build script of the Continous Integration System.</li>
                        <li>Used HTML, CSS and jQuery for adding features to the Continous Integration Web User Interface.</li>
                    </ul>
                </div>
                <div className='about-section about-education'>
                    <h3 className='about-section-heading'>
                        Education
                    </h3>
                    <h5>Thapar Institute of Engineering and Technology, Patiala <span className='time-span'>2018 - present</span></h5>
                    <p>Bachelor of Engineering, Computer Engineering</p>
                    <p>CGPA: 9.07/10</p>
                    <h5>L.B.S Senior Secondar School, Kota <span className='time-span'>2016 - 2018</span></h5>
                    <p>Higher Secondary, PCM</p>
                    <p>Percentage: 86%</p>
                </div>
                <div className='about-section about-experience'>
                    <h3 className='about-section-heading'>
                        Volunteer Work
                    </h3>
                    <h5>Joint Academic Head | ACM Student Chapter <span className='time-span'>June 2020 - July 2021</span></h5>
                    <ul>
                        <li>Mentored a batch of 27 sophomores of the ACM student chapter on Data structures and Algorithms.</li>
                        <li>Contributed to the society in organizing programming contests for the students of TIET.</li>
                    </ul>
                </div>
                <div className='about-section about-experience'>
                    <h3 className='about-section-heading'>
                        Achievements
                    </h3>
                    <ul>
                        <li>Ranked 20th in CCOE Appsec Hackathon/CTF.</li>
                        <li>Recipient of the Merit Scholarship by Thapar Institute, waiving off 50% of tuition fee.</li>
                    </ul>
                </div>
                <div className='about-section about-experience'>
                    <h3 className='about-section-heading'>
                        Skills
                    </h3>
                    <h5>Programming Langugages</h5>
                    <p>Cpp, Python, JS, SQL, HTML, Solidity</p>
                    <h5>Frameworks</h5>
                    <p>ReactJS, ExpressJS, Truffle</p>
                    <h5>Tools</h5>
                    <p>Linux, Git, Docker</p>
                </div>
                <a href="/files/Robin_Resume.pdf" download={true}><button className='nes-btn'>Download Resume</button></a>
            </div>
        </div>
    )
}

export default About
