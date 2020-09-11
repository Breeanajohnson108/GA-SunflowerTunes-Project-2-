import React, { useState, useEffect } from 'react';
import PlayList from './components/PlayList'
import Player from './components/Player'
import Request from './components/Request'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function App() {

  // Creating a State to hold my variable 'tunes' which will contain my api data
   const [tunes, setTunes] = useState([])
  useEffect(() => {
    //Creating a async function to hold my request to fetch my airtable data
    let getData = async () => {
      //Creating a variable 'airtableUrl' that will hold my api url
      const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/playlist`
      //Using axios to pass in my api key which will give me access to my airtable 
      const response = await axios.get(airtableUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      //Setting variable 'tunes' to hold all my data
      setTunes(response.data.records)
    };
    //Calling and running the getData function will go through the process of getting my data  
    getData()

  }, [])
  return (
    <>
      <h1 id="title">SunflowerTunes</h1>
      {/* Linking and Displaying my components */}
        <Route path="/">
          <PlayList tunes={tunes}/>
        </Route>
        
      <Player tunes={tunes} />
      <Request tunes={tunes}/>
            
    </>
  )
}

export default App;
