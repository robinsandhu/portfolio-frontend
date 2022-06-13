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
                    <img alt="Avatar" style={{width: imgWidth}} src="/images/redditAvatar1.png" />
                </div>
                <div className='home-content'>
                    <h5>
                        Hi, I'm Robin Sandhu, 
                        <br />
                        <br />
                        I'm a B.E. undergrad at Thapar Institute of Engineering and Technology, Patiala. I'm currently 
                        working as a Dev/QE intern at VMWare. 
                        <br />
                        <br />
                        Building applications and learning about software development in general are two of my favourite things to do.
                        I also love solving DSA problems by the side. 
                        <br />
                        <br />
                        This website is a small collection of my professional experience, project work, and blog posts.
                        <br />
                        <br />
                        {/* To know more about me check out the About page. */}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Home
