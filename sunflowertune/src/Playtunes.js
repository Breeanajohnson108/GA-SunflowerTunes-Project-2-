import React, { useState, state } from 'react'
import './App.css'




export default function Playtunes({ artist, title, link, thumbnail }) {
  let [showVid, setshowVid] = useState(false)
  const [likes, setlikes] = useState(0);
  return (

    <div className="vidContainer">
      <button className="playMe" onClick=
        {
          () => setshowVid(!showVid)
        }>Play Me</button>
      {
        // Found the iframe from W3schools, citing
        showVid &&
        <div>
          <iframe className="videos" width="560" height="315" src={link}
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen ></iframe >

          {/* Creating like and dislike button */}
          <button className="like" onClick={() => setlikes(likes + 1)}>Likes: {likes}</button>
          <button className="disLike">Dislike</button>

          {/* Creating a form */}
          <form className="form">
            <h1>Tunes Requests</h1>
            <p>Enter embedded youtube link</p>
            <input type="text" placeholder="Youtube Link....">
            </input>
            <button type="submit">
              submit
            </button>
          </form>
        </div>
      }
    </div>


  )
}
