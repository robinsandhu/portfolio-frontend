import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Gist from 'react-gist'
import ReactDOM from 'react-dom';
import './BlogContent.css'
import LinkIcon from '@mui/icons-material/Link';

function BlogContent({ mediumPosts, mainRef }) {
    let { id } = useParams()
    const [ parsedPost, setParsedPost ] = useState("")
    const mediumRedirectUrl = useRef([])

    id = parseInt(id)
    console.log(mediumPosts[id])
    const getGistId = async (url) => {
        try{
            const response = await fetch(`https://frozen-tor-98508.herokuapp.com/${url}`)
            return response.headers.get('x-final-url').split('/').slice(-1)
        }catch(err){
            console.log(err)
            return ""
        }
    }

    useEffect(() => {
        if(mediumPosts.length === 0 || typeof(id) !== 'number') return

        mainRef.current.scrollTo({top: 0, left: 0})
        const init = async () => {
            const regexp = /<a\shref="https:\/\/medium.com\/media\/\w*\/href">https:\/\/medium.com\/media\/\w*\/href<\/a>/g
            const text = mediumPosts[id].content
            const matches = text.matchAll(regexp)
            let result = text
    
            let id_val = 0;
            for(const match of matches){
                mediumRedirectUrl.current.push(text.substring(match.index+9, match.index + 71))
                result = result.replace(match[0], `<div class="blogcontent--iframe-container" id="gist_mount_${id_val++}"></div>`)
            }
            
            setParsedPost(result)

            // add gists to blog
            mediumRedirectUrl.current.map(async (redirectUrl, index) => {
                const gistId = await getGistId(redirectUrl)
                // console.log(gistId, `gist_mount_${index}`)
                ReactDOM.render(<Gist id={gistId} />, document.getElementById(`gist_mount_${index}`))
            })
        }

        init()
    }, [mediumPosts, id])

    return (
        <div className='nes-container with-title blogcontainer'>
            <p className="title">
                {mediumPosts.length && mediumPosts[id] && mediumPosts[id].title}
                <a target="_blank" href={mediumPosts[id].link}>
                    <LinkIcon />
                </a>
            </p>
            <div className='blogcontent' dangerouslySetInnerHTML={{__html: parsedPost}}>
            </div>
            <div className='blogcontent--footer'>
                <hr />
                <div className='blogcontent--footer-nav'>
                    <div className='blogcontent--footer-left'>
                        {
                            id-1 > -1 ?
                            <>
                                <p>Next</p>
                                <Link to={`/blog/${id-1}`}>{mediumPosts.length && mediumPosts[id] && mediumPosts[id-1].title}</Link> 
                            </>
                            : 
                            <>
                                <p>Next</p>
                                <p>No newer posts</p>
                            </>
                        }
                    </div>
                    <div className='blogcontent--footer-right'>
                        {
                            id+1 < mediumPosts.length ? 
                            <>
                                <p>Prev</p>
                                <Link to={`/blog/${id+1}`}>{mediumPosts.length && mediumPosts[id] && mediumPosts[id+1].title}</Link> 
                            </>
                            : 
                            <>
                                <p>Prev</p>
                                <p>No previous posts</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent
