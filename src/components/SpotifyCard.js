import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SpotifyCard.css'

function SpotifyCard({ musicList }) {
    return (
        <div className='nes-container with-title is-centered spotifycard'>
            <h2 className="title">My Top Tracks</h2>
            {
                musicList.map((music, idx) => {
                    return <a key={idx} target="_blank" href={music.external_urls.spotify}>{music.name}</a>
                })
            }
        </div>
    )
}

export default SpotifyCard
