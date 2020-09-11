import React, { useState, state } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Like from './Like'
import Dislike from './DisLike'


let Player = ({ tunes }) =>
{
  let [showVid, setshowVid] = useState(false)  
  let video = tunes.map((video) =>
    (
      <div className="vidContainer">
      <button className="playMe" onClick=
        {
          () => setshowVid(!showVid)
        }>Play Me</button>
      {
        // Found the iframe from W3schools, citing
          showVid &&
          
          <div>
            <>
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