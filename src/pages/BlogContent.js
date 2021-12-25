import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './BlogContent.css'

function BlogContent({ mediumPosts, mainRef }) {
    let { id } = useParams()
    const [ parsedPost, setParsedPost ] = useState("")

    id = parseInt(id)
    // const getGistUrl = async (url) => {
    //     try{
    //         const response = await fetch(`https://frozen-tor-98508.herokuapp.com/${url}`)
    //         const gistUrl = response.headers.get('x-final-url')+".js"
    //         return gistUrl
    //     }catch(err){
    //         console.log(err)
    //         return ""
    //     }
    // }

    useEffect(() => {
        if(mediumPosts.length === 0 || typeof(id) !== 'number') return

        mainRef.current.scrollTo({top: 0, left: 0})
        const init = async () => {
            const regexp = /<a\shref="https:\/\/medium.com\/media\/\w*\/href">https:\/\/medium.com\/media\/\w*\/href<\/a>/g
            const text = mediumPosts[id].content
            const matches = text.matchAll(regexp)
            let result = text
    
            for(const match of matches){
                // const gistUrl = await getGistUrl(text.substring(match.index+9, match.index + 71))
                // console.log(gistUrl)
                result = result.replace(match[0], `<div class="blogcontent--iframe-container"><iframe src="https://frozen-tor-98508.herokuapp.com/${text.substring(match.index+9, match.index + 66)}" class="blogcontent-iframe"></iframe></div>`)
                // result = result.replace(match[0], `<div class="blogcontent--iframe-container"><script src="${gistUrl}"></script></div>`)
            }
    
            setParsedPost(result)
        }

        init()
    }, [mediumPosts, id])

    return (
        <div className='nes-container with-title'>
            <p className="title">{mediumPosts[id] && mediumPosts[id].title}</p>
            <div className='blogcontent' dangerouslySetInnerHTML={{__html: parsedPost}}>
            </div>
            <hr />
            <div className='blogcontent--footer'>
                <div className='blogcontent--footer-left'>
                    {id-1 > -1 ? <Link to={`/blog/${id-1}`}>{mediumPosts[id-1].title}</Link> : <p>Start</p>}
                </div>
                <div className='blogcontent--footer-right'>
                    {id+1 < mediumPosts.length ? <Link to={`/blog/${id+1}`}>{mediumPosts[id+1].title}</Link> : <p>End</p>}
                </div>
            </div>
        </div>
    )
}

export default BlogContent
