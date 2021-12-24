import React from 'react'
import BlogCard from '../components/BlogCard'
import './Blog.css'

function Blog({ mediumPosts }) {
    return (
        <div className='nes-container with-title blogs'>
            <p className='title'>My Blogs</p>
            {
                mediumPosts.map((item, idx) => <BlogCard key={idx} item={item} index={idx}/>)
            }
        </div>
    )
}

export default Blog
