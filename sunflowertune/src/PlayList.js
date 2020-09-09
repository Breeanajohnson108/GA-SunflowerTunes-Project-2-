import React from 'react'
import GetData from './GetData'
import './App.css'


export default function PlayList({artist, title, link, thumbnail})
{
  
  console.log(thumbnail)
  return (
      <div className="row">
        <div className="column">
          <img className="cover" src={thumbnail}></img>
        </div>
      </div>
  )
}
