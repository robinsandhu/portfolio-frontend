import React from "react"
import { Routes, Route } from 'react-router-dom'
import "./Widgets.css"
import LightModeIcon from '@mui/icons-material/LightMode'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SpotifyCard from "./SpotifyCard";

function Widgets({ toggleDisplayMode, randomQuote, mainRef, musicList }) {
    return (
        <div className="widgets">
            <div className="widgets--widgetContainer">
                <Routes>
                    <Route path="/" element={<SpotifyCard musicList={musicList} />} />
                    <Route path="/about" element={<React.Fragment />} />
                    <Route path="/projects" element={<React.Fragment />} />
                    <Route path="/blog" element={<React.Fragment />} />
                    <Route path="/blog/:id" element={<React.Fragment />} />
                    <Route path="/contact" element={<React.Fragment />} />
                </Routes>
            </div>
            <div className="widgets--footer">
                <div className="nes-balloon from-right quote">
                    <p>
                        {randomQuote && randomQuote.content} - {randomQuote && randomQuote.author}
                    </p>
                </div>
                <i className="nes-bcrikko head"></i>
                <KeyboardArrowUpIcon className="icon" onClick={() => {mainRef.current.scrollTo({top: 0, left: 0, behavior: "smooth"})}}/>
                <LightModeIcon className="icon" onClick={toggleDisplayMode} />
            </div>
        </div>
    );
}

export default Widgets;