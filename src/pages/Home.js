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
                    <img style={{width: imgWidth}} src="/images/redditAvatar1.PNG" />
                </div>
                <div className='home-content'>
                    <p>
                        Hi this is Robin and again some lorem ipsum text.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
