import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './BlogCatalogue.css';

function BlogCatalogue({ mediumPosts, displayMode }) {
    const [ catalogue, setCatalogue ] = useState([])
    let { id } = useParams()
    id = parseInt(id)

    useEffect(() => {
        if(mediumPosts.length === 0 || typeof(id) !== 'number') return

        const post = mediumPosts[id].content

        // parse content
        const regExp = /<h4>.*<\/h4>/g
        const headingMatches = post.matchAll(regExp)

        for(const match of headingMatches){
            const text = match[0]

            const regex = /(<([^>]+)>)/g
            const result = text.replace(regex, '');
            // console.log(result)
            setCatalogue(prevState => [...prevState, result])
        }
    }, [ mediumPosts, id ]);

    return (
        <div className={`nes-container with-title is-centered ${displayMode ? "is-dark" : ""}`}>
            <h2 className="title">Catalogue</h2>
            <div className="cataloguecard">
            {
                catalogue.map((h, ind) => {
                    return <Link to={""} key={ind} style={displayMode ? {color: "white"} : {}}>{h}</Link>
                })
            }
            </div>
        </div>
    );
}

export default BlogCatalogue;
