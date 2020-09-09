import React from 'react'
import GetData from './GetData'
import './App.css'

export default function Playtunes({ artist, title, link, thumbnail })
{
  console.log(artist)
  return (
    // <iframe width="420" height="315">
    //   <source src={link}></source>
    // </iframe>

    <iframe className="videos" width="560" height="315" src={link}
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen ></iframe >
  )
}
