import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Gist from 'react-gist'
import ReactDOM from 'react-dom';
import './BlogContent.css'
import LinkIcon from '@mui/icons-material/Link';
import { TwitterTweetEmbed } from 'react-twitter-embed'
function BlogContent({ mediumPosts, mainRef }) {
    let { id } = useParams()
    const [ parsedPost, setParsedPost ] = useState("")
    const mediumGistRedirectUrl = useRef([])
    const mediumTweetEmbedLink = useRef([])

    id = parseInt(id)
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
            // replace gist link with div for embedding
            const gistLinkRegExp = /<a\shref="https:\/\/medium.com\/media\/\w*\/href">https:\/\/medium.com\/media\/\w*\/href<\/a>/g
            const text = mediumPosts[id].content
            const gistLinkMatches = text.matchAll(gistLinkRegExp)
            let result = text
    
            let id_val = 0;
            for(const match of gistLinkMatches){
                mediumGistRedirectUrl.current.push(text.substring(match.index+9, match.index + 71))
                result = result.replace(match[0], `<div class="blogcontent--iframe-container" id="gist_mount_${id_val++}"></div>`)
            }

            // replace tweet blockquotes with div for embedding
            id_val = 0
            const tweetLinkRegExp = /<blockquote class="twitter-tweet" data-conversation="none" data-align="center" data-dnt="true"><p> — <a href="https:\/\/twitter.com\/.*\/status\/.*">.*<\/a><\/p><\/blockquote>/g
            const tweetLinkMatches = text.matchAll(tweetLinkRegExp)

            for(const match of tweetLinkMatches){
                const tweetUrlRegExp = /https:\/\/twitter.com\/.*\/status\/\d*/g
                const urlLinkMatch = match[0].matchAll(tweetUrlRegExp)
                for(const e of urlLinkMatch){
                    mediumTweetEmbedLink.current.push(text.substring(match.index + e.index, match.index + e.index + e[0].length))
                    result = result.replace(match[0], `<div class="blogcontent--iframe-container" id="tweet_mount_${id_val++}"></div>`)
                }
            }

            setParsedPost(result)
        }

        init()
    }, [mediumPosts, id])

    useEffect(() => {
        if(parsedPost.length === 0) return

        // add gists to blog
        mediumGistRedirectUrl.current.map(async (redirectUrl, index) => {
            const gistId = await getGistId(redirectUrl)
            // console.log(gistId, `gist_mount_${index}`)
            ReactDOM.render(<Gist id={gistId} />, document.getElementById(`gist_mount_${index}`))
        })

        // add tweets to blog
        mediumTweetEmbedLink.current.map(async (tweetUrl, index) => {
            const tweetId = tweetUrl.split('/').slice(-1)[0]
            ReactDOM.render(<TwitterTweetEmbed tweetId={tweetId} />, document.getElementById(`tweet_mount_${index}`))
        })
    }, [parsedPost])

    return (
        <div className='nes-container with-title blogcontainer'>
            <p className="title">
                {mediumPosts.length && mediumPosts[id] && mediumPosts[id].title}
                <a target="_blank" href={mediumPosts.length && mediumPosts[id] && mediumPosts[id].link}>
                    <LinkIcon style={{margin: "7px"}} />
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
