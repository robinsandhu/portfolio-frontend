import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './BlogContent.css'

function BlogContent({ mediumPosts }) {
    const { id } = useParams()
    const [ parsedPost, setParsedPost ] = useState("")

    const getGistUrl = async (url) => {
        try{
            const response = await fetch(`https://frozen-tor-98508.herokuapp.com/${url}`)
            const gistUrl = response.headers.get('x-final-url')+".js"
            return gistUrl
        }catch(err){
            console.log(err)
            return ""
        }
    }

    useEffect(() => {
        if(!mediumPosts) return

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
    
            setParsedPost(`<p class="title">${mediumPosts[id].title}</p>`+result)
        }

        init()
    }, [mediumPosts])

    return (
        <div className='nes-container with-title blogcontent' dangerouslySetInnerHTML={{__html: parsedPost}}>
        </div>
    )
}

export default BlogContent
