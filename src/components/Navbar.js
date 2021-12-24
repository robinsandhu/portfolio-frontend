import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css'

function Navbar({toggleDisplayMode, setIsSidebarOpen}) {
    return (
        <div className='navmenu'>
            <ReorderIcon className="navmenu-icon" onClick={() => {setIsSidebarOpen(prevState => !prevState)}} />
            <div className="navmenu--right">
                <LightModeIcon className="icon" onClick={toggleDisplayMode} />
            </div>
        </div>
    )
}

export default Navbar
