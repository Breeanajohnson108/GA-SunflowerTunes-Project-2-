import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Tune from './Tune';


//Creating a function called 'PlayLists' that will pass in data(tunes)
let PlayLists = ({ tunes }) =>
{
  //Getting my tunes object which contains airtable api data
  let tunesData = tunes.map((tunesData) =>
    (
      //displaying each tune album cover horizontally
      <div className="row">
        <div className="column">
          <img className="cover" src={tunesData.fields.thumbnail}></img>
          <h3 className="coverTitle">{tunesData.fields.title}</h3>
          <Tune video={tunesData} />
        </div>
        </div>
    ))

  return tunesData
}




export default PlayLists;
