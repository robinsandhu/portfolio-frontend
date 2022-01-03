import React from "react"
import { Routes, Route } from 'react-router-dom'
import "./Widgets.css"
import LightModeIcon from '@mui/icons-material/LightMode'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SpotifyCard from "./SpotifyCard";
import { Link } from 'react-router-dom'

function Widgets({ toggleDisplayMode, randomQuote, mainRef, musicList, displayMode }) {
    let style = {
        backgroundColor: "rgb(54, 57, 63)"
    }

    return (
        <div className="widgets" style={displayMode === true ? style : {}}>
            <div className="widgets--widgetContainer">
                <Routes>
                    <Route path="/" element={<SpotifyCard musicList={musicList} displayMode={displayMode} />} />
                    <Route path="/about" element={<React.Fragment />} />
                    <Route path="/projects" element={<React.Fragment />} />
                    <Route path="/blog" element={<React.Fragment />} />
                    <Route path="/blog/:id" element={<React.Fragment />} />
                    <Route path="/contact" element={<React.Fragment />} />
                </Routes>
            </div>
            <div className="widgets--footer">
                <div className={`nes-balloon from-right quote ${displayMode === true ? "is-dark" : ""}`}>
                    <div>
                        <p>
                            "{randomQuote && randomQuote.content}"
                        </p>
                        <p style={{textAlign: "end", fontSize: "0.6rem"}}>
                            { randomQuote && "-"} {randomQuote && randomQuote.author}
                        </p>
                    </div>
                </div>
                <i className="nes-bcrikko head"></i>
                <div>
                    <a><KeyboardArrowUpIcon className="icon" style={displayMode === true ? { color:"white" } : {}} onClick={() => {mainRef.current.scrollTo({top: 0, left: 0, behavior: "smooth"})}}/></a>
                </div>
                <div>
                    <a><LightModeIcon className="icon" style={displayMode === true ? { color:"white" } : {}} onClick={toggleDisplayMode} /></a>
                </div>
            </div>
        </div>
    );
}

export default Widgets;