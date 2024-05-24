import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar({ isSidebarOpen, setIsSidebarOpen, displayMode }) {
    const [ activeList, setActiveList ] = useState([false, false, false, false, false])

    useEffect(() => {
        let pathName = window.location.pathname
        const uri = pathName.substring(1, pathName.length).toLowerCase()
        let index = -1;
        switch(uri){
            case "":
                index = 0
                break;
            case "about":
                index = 1
                break;
            case "projects":
                index = 2
                break;
            case "blog":
                index = 3
                break;
            case "contact":
                index = 4
                break;
            default:
                index = -1
                break;
        }
        if(index !== -1){
            let newList = [false, false, false, false, false]
            newList[index] = true
            setActiveList(newList)
        }
    }, [])

    const handleClick = (index) => {
        let newList = [false, false, false, false, false]
        newList[index] = true
        setActiveList(newList)
        setIsSidebarOpen(false)
    }

    let style = displayMode === true ?
    {
        backgroundColor: "rgb(54, 57, 63)"
    }
    :
    {}

    let linkStyle = {
        textDecoration: "none"
    }
    if(displayMode === true){
        linkStyle.color = "white"
    }

    return (
        <div className="sidebar" style={isSidebarOpen ? {...style, width: "266px"} : {...style}}>
            <Link to="/" style={linkStyle} onClick={() => {handleClick(0)}}>
                <SidebarOption text="Robin Sandhu" handle="@rrobin_sandhu" active={activeList[0]} />
            </Link>
            <Link to="/about" style={linkStyle} onClick={() => {handleClick(1)}}>
                <SidebarOption text="About" active={activeList[1]} />
            </Link>
            <Link to="/projects" style={linkStyle} onClick={() => {handleClick(2)}}>
                <SidebarOption text="Projects" active={activeList[2]} />
            </Link>
            <Link to="/blog" style={linkStyle} onClick={() => {handleClick(3)}}>
                <SidebarOption text="Blog" active={activeList[3]} />
            </Link>
            <Link to="/contact" style={linkStyle} onClick={() => {handleClick(4)}}>
                <SidebarOption text="Contact" active={activeList[4]} />
            </Link>
            <div className="sidebar--footer">
                <small>&copy; {new Date().getFullYear()} Robin Sandhu</small>
            </div>
        </div>
    );
}

export default Sidebar;