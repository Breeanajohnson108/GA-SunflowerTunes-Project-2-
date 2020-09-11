import React, { useState, useEffect } from 'react';
import PlayList from './components/PlayList'
import Player from './components/Player'
import Request from './components/Request'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function App() {

   const [tunes, setTunes] = useState([])
  useEffect(() => {
    let getData = async () => {
      const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/playlist`
      const response = await axios.get(airtableUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response)
      setTunes(response.data.records)
    };
    getData()

  }, [])
  return (
    <>
      <h1 id="title">SunflowerTunes</h1>
      
        <Route path="/">
          <PlayList tunes={tunes}/>
        </Route>
        
      <Player tunes={tunes} />
      <Request tunes={tunes}/>
            
    </>
  )
}

export default App;
