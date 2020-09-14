import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


let Instructions = () =>
{
  return (
    
      <div className= "lists">
        <h3 className="listTitle">Instructions</h3>
        <ol className="eachList">
          <li>Enter artist name</li>
          <li>Enter song title</li>
          <li>Enter youtube embedded link which can be found by
              clicking on share button. Click on embed and then ONLY copy the 'src' link and
              paste it in form.
          </li>
          <li>Copy and paste a direct image link address for song( it can be a album cover art found on google)</li>
        </ol>
      </div>
  )
}

export default Instructions