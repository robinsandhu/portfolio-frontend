import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import './Main.css'
import BlogContent from '../pages/BlogContent';

function Main({ setIsSidebarOpen, mediumPosts, mainRef, displayMode }) {
    let style = displayMode ?
    {
        backgroundColor: "rgb(33, 37, 41)"
    }
    :
    {}
    return (
        <div ref={mainRef} className='main' style={style} onClick={() => {setIsSidebarOpen(false)}}>
            <Routes>
                <Route path="/" element={<Home displayMode={displayMode}/>} />
                <Route path="/about" element={<About displayMode={displayMode} />} />
                <Route path="/projects" element={<Projects displayMode={displayMode} />} />
                <Route path="/blog" element={<Blog mediumPosts={mediumPosts} displayMode={displayMode} />} />
                <Route path="/blog/:id" element={<BlogContent mainRef={mainRef} mediumPosts={mediumPosts} displayMode={displayMode} />} />
                <Route path="/contact" element={<Contact displayMode={displayMode} />} />
            </Routes>
        </div>
    )
}

export default Main
