import React from 'react'
import './About.css'

function About({ displayMode }) {
    return (
        <div className="about">
            <div className={`nes-container with-title about-container ${displayMode ? "is-dark" : ""}`}>
                <p className='title'>
                    {/* <i className="nes-icon is-small heart"></i> */}
                    About Me
                    {/* <i className="nes-icon is-small heart"></i> */}
                </p>
                <div className='about-content'>
                    {/* <h5>
                        Hi, I'm Robin Sandhu a beginner software developer. I enjoy building applications and learning about software development in general. I also have a huge interest in cyber security, so I like to try my hands in this field whenever I get a chance.
                    </h5> */}
                    <div className='about-section about-experience'>
                        <h3 className='about-section-heading'>
                            Experience
                        </h3>
                        <div className='about-section-content'>
                            <h5>VMWare - MTS Intern <span className='time-span'>Jan. 2022 - July 2022</span></h5>
                            <ul>
                                <li>Collated all the important networking endpoints for the Dimension SDDC Rack.</li>
                                <li>Created a python micro-service for validating the networking endpoints on Day-0 and Day-2 bring-up operations.</li>
                                <li>Performed Unit Testing of the framework endpoint by endpoint and E2E testing for Day-0 bringup operation.</li>
                            </ul>
                        </div>
                        <div className='about-section-content'>
                            <h5>ZScaler - Development Intern <span className='time-span'>June 2021 - Sep 2021</span></h5>
                            <ul>
                                <li>Wrote Rest API endpoints in JAVA Jersey framework for implementing the functionality of the features.</li>
                                <li>Wrote SQL queries in the Java API endpoints for fetching out the relevant info from the MySQl database.</li>
                                <li>Worked on modularizing the main build script of the Continous Integration System.</li>
                                <li>Used HTML, CSS and jQuery for adding features to the Continous Integration Web User Interface.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='about-section about-education'>
                        <h3 className='about-section-heading'>
                            Education
                        </h3>
                        <div className='about-section-content'>
                            <h5>Thapar Institute of Engineering and Technology, Patiala <span className='time-span'>2018 - present</span></h5>
                            <p>Bachelor of Engineering, Computer Engineering</p>
                            <p>CGPA: 9.03/10</p>
                            <h5>L.B.S Senior Secondar School, Kota <span className='time-span'>2016 - 2018</span></h5>
                            <p>Higher Secondary, PCM</p>
                            <p>Score: 86%</p>
                        </div>
                    </div>
                    <div className='about-section about-experience'>
                        <h3 className='about-section-heading'>
                            Volunteer Work
                        </h3>
                        <div className='about-section-content'>
                            <h5>Joint Academic Head | ACM Student Chapter <span className='time-span'>June 2020 - July 2021</span></h5>
                            <ul>
                                <li>Mentored a batch of 27 sophomores of the ACM student chapter on Data structures and Algorithms.</li>
                                <li>Contributed to the society in organizing programming contests for the students of TIET.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='about-section about-experience'>
                        <h3 className='about-section-heading'>
                            Achievements
                        </h3>
                        <ul>
                            <li>Ranked 20th in CCOE Appsec Hackathon/CTF 2021.</li>
                            <li>Recipient of the Merit Scholarship by Thapar Institute, waiving off 50% of tuition fee.</li>
                        </ul>
                    </div>
                    <div className='about-section about-experience'>
                        <h3 className='about-section-heading'>
                            Skills
                        </h3>
                        <div className='about-section-content'>
                            <h5>Programming Langugages</h5>
                            <p>- Cpp, Python, JS, SQL, HTML, Solidity</p>
                            <h5>Frameworks</h5>
                            <p>- ReactJS, ExpressJS, Truffle</p>
                            <h5>Tools</h5>
                            <p>- Linux, Git, Docker</p>
                        </div>
                    </div>
                    <a href="https://drive.google.com/drive/folders/19dwFq4SP_whtCNv5PEpON1Jkpou8gMkU?usp=sharing" target="_blank" rel="noreferrer"><button className='nes-btn'>View Resume</button></a>
                </div>
            </div>
        </div>
    )
}

export default About
