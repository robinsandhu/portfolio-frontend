import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css'

function Navbar({ toggleDisplayMode, setIsSidebarOpen, displayMode }) {
    return (
        <div className='navmenu' style={{ backgroundColor: "rgb(54, 57, 63)" }}>
            <ReorderIcon className="navmenu-icon" style={{ color:"white" }} onClick={() => {setIsSidebarOpen(prevState => !prevState)}} />
            <div className="navmenu--right">
                <LightModeIcon className="icon" style={{ color:"white" }} onClick={toggleDisplayMode} />
            </div>
        </div>
    )
}

export default Navbar
