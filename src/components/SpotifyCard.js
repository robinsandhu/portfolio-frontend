import React from 'react'
import './SpotifyCard.css'

function SpotifyCard({ musicList, displayMode }) {
    return (
        <div className={`nes-container with-title is-centered spotifycard ${displayMode ? "is-dark" : ""}`}>
            <h2 className="title">My Spotify</h2>
            {
                musicList.map((music, idx) => {
                    return <a key={idx} target="_blank" rel="noopener" style={displayMode ? {color: "white"} : {}} href={music.external_urls.spotify}>{music.name}</a>
                })
            }
        </div>
    )
}

export default SpotifyCard
