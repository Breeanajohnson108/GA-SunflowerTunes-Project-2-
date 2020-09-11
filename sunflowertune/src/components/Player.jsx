import React, { useState, state } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Like from './Like'
import Dislike from './DisLike'

//Creating a function called 'Player' that will pass in data(tunes)
let Player = ({ tunes }) =>
{
  //Setting up a State to hold my showVid variable
  let [showVid, setshowVid] = useState(false)
  //Getting my tunes object which contains airtable api data
  let video = tunes.map((video) =>
    (
      //Creating a clickable button
      <div className="vidContainer">
      <button className="playMe" onClick=
        {
          () => setshowVid(!showVid)
        }>Play Me</button>
      {
          // Making the 'playMe' button be able to toggle between hiding and showing video player when clicked on
          showVid &&
          
          <div>
            <>
              {/* Found the iframe from W3schools, citing */}
          <iframe className="videos" width="560" height="315" src={video.fields.link}
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen ></iframe >
              <Like />
              <Dislike />
            </>
        </div>
      }
    </div>
    ))
  return video
}










export default Player;