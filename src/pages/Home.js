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
                        Hi this is Robin and again some lorem ipsum text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Home
