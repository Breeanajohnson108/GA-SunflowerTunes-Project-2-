import React, { useState, state } from 'react'
import GetData from './GetData'
import './App.css'
import PlayList from './PlayList'



export default function Playtunes({ artist, title, link, thumbnail }) {
  let [showVid, setshowVid] = useState(false)
  let setlikes = 0;
  return (

    <div className="vidContainer">
      <button className="playMe" onClick=
        {
          () => setshowVid(!showVid)
        }>Play Me</button>
      {
        showVid &&
        <div>
          <iframe className="videos" width="560" height="315" src={link}
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen ></iframe >
          <button className="like" onClick={(setlikes) => setlikes++}>Likes: {setlikes}</button>
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
