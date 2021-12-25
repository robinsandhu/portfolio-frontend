import React from 'react'
import BlogCard from '../components/BlogCard'
import './Blog.css'

function Blog({ mediumPosts }) {
    return (
        <div className='blogs'>  
            <div className='nes-container with-title blogs-container'>
                <p className='title'>Blog Posts</p>
                {
                    mediumPosts.map((item, idx) => <BlogCard key={idx} item={item} index={idx}/>)
                }
            </div>
        </div>
    )
}

export default Blog
