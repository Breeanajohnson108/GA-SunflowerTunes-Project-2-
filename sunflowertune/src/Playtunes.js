import React, {useState} from 'react'
import GetData from './GetData'
import './App.css'
import PlayList from './PlayList' 

export default function Playtunes({ artist, title, link, thumbnail })
{  
  let [showVid, setshowVid] = useState(false)
  return (

    <div>
          <button className="playMe" onClick=
          {
            () => setshowVid(!showVid)
          }>Play Me</button>
      {
          showVid &&
          <iframe className="videos" width="560" height="315" src={link}
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen ></iframe >
      }
    </div>
    
    
  )
}
