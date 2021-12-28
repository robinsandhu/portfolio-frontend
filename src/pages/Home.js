import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
    const [ imgWidth, setImgWidth ] = useState("400px")    
    useEffect(() => {
        setImgWidth("300px")
    }, [])

    return (
        <div className='home'>
            <div className='nes-container home-container'>
                <div className="home-image">
                    <img style={{width: imgWidth}} src="/images/redditAvatar.png" />
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
