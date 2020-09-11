import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'



let PlayLists = ({ tunes }) =>
{
  console.log(tunes)
  let tunesData = tunes.map((tunesData) =>
    (
      <div className="row">
        <div className="column">
          <img className="cover" src={tunesData.fields.thumbnail}></img>
          {/* <h3>{tunesData.fields.title}</h3> */}
        </div>
      </div> 
    ))

  return tunesData
}




export default PlayLists;