import React, { useState, useEffect, useRef } from 'react'
import Sidebar from'./components/Sidebar'
import Main from './components/Main'
import Widgets from './components/Widgets'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Cookies from 'js-cookie'

// mode
// 0 - light mode
// 1 - dark mode
const feedUrl = "https://medium.com/feed/@robin-sandhu"

function App() {
  const location = useLocation()

  const [ displayMode, setDisplayMode ] = useState(false);
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
  const [ randomQuotes, setRandomQuotes ] = useState([])
  const [ mediumPosts, setMediumPosts ] = useState([])
  const [ musicList, setMusicList ] = useState([])
  const [ quoteIndex, setQuoteIndex ] = useState(0)
  
  const mainRef = useRef()

  useEffect(() => {
      const darkModeInitVal = Cookies.get('dark');
      if(darkModeInitVal)
        setDisplayMode(darkModeInitVal === 'true')
      axios.get("https://dry-crag-29825.herokuapp.com/api/songs/top-tracks").then(response => {
          setMusicList(response.data.slice(0, 4))
      })
  }, [])

  const toggleDisplayMode = () => {
    setDisplayMode(prevState => {
      localStorage.setItem('robinDarkMode', !prevState)
      document.cookie = `dark=${!prevState}`
      return !prevState
    })
  }

  useEffect(() => {
    axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`).then(response => {
      if(response.data.status === "ok"){
        setMediumPosts(response.data.items)
      }
    }).catch(console.log)
  }, [])

  useEffect(() => {
    axios.get(`https://api.quotable.io/quotes?maxLength=50&page=${Math.ceil(Math.random()*5)}`).then(data => {
      setRandomQuotes(data.data.results)
    }).catch(console.log)
  }, [])

  useEffect(() => {
    let quoteCount = randomQuotes.length
    if(quoteCount !== 0)
    setQuoteIndex(prevState => (prevState+1)%quoteCount)
  }, [location])

  return (
    <React.Fragment>
      <Navbar toggleDisplayMode={toggleDisplayMode} setIsSidebarOpen={setIsSidebarOpen} displayMode={displayMode} />
      <div className="app">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} displayMode={displayMode} />
        <Main setIsSidebarOpen={setIsSidebarOpen} mediumPosts={mediumPosts} mainRef={mainRef} displayMode={displayMode} />
        <Widgets toggleDisplayMode={toggleDisplayMode} randomQuote={randomQuotes.length !==0 && randomQuotes[quoteIndex]} mainRef={mainRef} musicList={musicList} displayMode={displayMode} />
      </div>
    </React.Fragment>
  );
}

export default App;
