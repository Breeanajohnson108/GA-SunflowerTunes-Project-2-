import React, { useState, state } from 'react'
import GetData from './GetData'
import './App.css'
import PlayList from './PlayList' 
import LikeTune from './LikeTune'


export default function Playtunes({ artist, title, link, thumbnail })
{  
  let [showVid, setshowVid] = useState(false)
  let [likes, setlikes] = useState(0,function (likes)
  {
    let newCount = likes + 1
     console.log()
   })
  
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
          <button className="like" onClick={() => setlikes(likes)}>Likes: {likes}</button>
          <button className="disLike">Dislike</button>
        </div>         
      }
    </div>
    
    
  )
}
