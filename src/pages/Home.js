import React, { useEffect, useState } from 'react'
import './Home.css'

function Home({ displayMode }) {
    const [ imgWidth, setImgWidth ] = useState("320px")    
    useEffect(() => {
        setImgWidth("266px")
    }, [])

    return (
        <div className='home'>
            <div className={`nes-container home-container ${displayMode ? "is-dark" : ""}`}>
                <div className="home-image">
                    <img style={{width: imgWidth}} src="/images/redditAvatar1.png" />
                </div>
                <div className='home-content'>
                    <h5>
                        Hi, I'm Robin Sandhu a beginner software developer. I enjoy building applications and learning about software development in general. I also have a huge interest in cyber security, so I like to try my hands in this field whenever I get a chance. This website is a small collection of my project work, work experience and blog posts. To know more about me check out the About page.
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Home
