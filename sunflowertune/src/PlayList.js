import React from 'react'
import './App.css'
import App from './App'
import { Link } from 'react-router-dom'



export default function PlayList()
{
  
  let tunesData = ({ tunes }) =>
  {
    let dataTunes = tunes.map((tunes) =>
    {
      <Link to={`/app/${tunes.artist}`} key={tunes.artist}></Link>
    })
  }
  


  return (
      <div className="row">
        
      </div>
  )
}
