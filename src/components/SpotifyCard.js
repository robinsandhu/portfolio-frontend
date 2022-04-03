import React from 'react'
import './SpotifyCard.css'

function SpotifyCard({ musicList, displayMode }) {
    return (
        <div className={`nes-container is-centered spotifycard ${displayMode ? "is-dark" : ""}`}>
            {/* <h2 className="title">My Spotify</h2> */}
            {
                musicList.map((music, idx) => {
                    return <p>I'm listening to <a key={idx} target="_blank" rel="noreferrer" style={displayMode ? {color: "white"} : {}} href={music.external_urls.spotify}>{music.name}</a> on Spotify.</p>
                })
            }
        </div>
    )
}

export default SpotifyCard
