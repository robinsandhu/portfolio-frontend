import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import './Main.css'
import BlogContent from '../pages/BlogContent';

function Main({ setIsSidebarOpen, mediumPosts, mainRef }) {
    return (
        <div ref={mainRef} className='main' onClick={() => {setIsSidebarOpen(false)}}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog mediumPosts={mediumPosts} />} />
                <Route path="/blog/:id" element={<BlogContent mainRef={mainRef} mediumPosts={mediumPosts} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Main
