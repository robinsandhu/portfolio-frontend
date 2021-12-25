import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
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

    return (
        <div className="sidebar" style={isSidebarOpen ? {width: "280px"} : {}}>
            <Link to="/" style={{textDecoration: "none"}} onClick={() => {handleClick(0)}}>
                <SidebarOption text="Robin Sandhu" handle="@rob6x9n" active={activeList[0]} />
            </Link>
            <Link to="/about" style={{textDecoration: "none"}} onClick={() => {handleClick(1)}}>
                <SidebarOption text="About" active={activeList[1]} />
            </Link>
            <Link to="/projects" style={{textDecoration: "none"}} onClick={() => {handleClick(2)}}>
                <SidebarOption text="Projects" active={activeList[2]} />
            </Link>
            <Link to="/blog" style={{textDecoration: "none"}} onClick={() => {handleClick(3)}}>
                <SidebarOption text="Blog" active={activeList[3]} />
            </Link>
            <Link to="/contact" style={{textDecoration: "none"}} onClick={() => {handleClick(4)}}>
                <SidebarOption text="Contact" active={activeList[4]} />
            </Link>
            <div className="sidebar--footer">
                <small>&copy; 2021 robin</small>
            </div>
        </div>
    );
}

export default Sidebar;