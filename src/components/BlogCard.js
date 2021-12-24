import React from 'react'
import { Link } from 'react-router-dom'
import './BlogCard.css'

function BlogCard({ item, index }) {
    let startIdx = item && item.description.indexOf('<p>')
    let endIdx = -1
    if(startIdx !== -1)
        endIdx = item && item.description.substring(startIdx+3).indexOf('</p>')
    let trimmedDesc = ""
    if(startIdx !== -1 && endIdx !== -1){
        trimmedDesc = item.description.substring(startIdx+3, Math.min(endIdx, 340))
    }

    return (
        <div className='blogcard'>
            <div className='nes-container is-rounded'>
                <Link to={`/blog/${index}`}>
                    <div className='blogcard--container'>
                        <div className='blogcard--subject'>
                            <p className='blogcard-title'>{ item.title }</p>
                            <p className='blogcard-desc' dangerouslySetInnerHTML={{__html: trimmedDesc+"..."}}></p>
                        </div>
                        <div className='blogcard--image'>
                            <img src={item.thumbnail} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard
