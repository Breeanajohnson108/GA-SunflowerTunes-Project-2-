import React, { useState, state } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Tune from './Tune'

//Creating a function called 'Player' that will pass in data(tunes)
let Player = ({ tunes }) =>
{
  //Setting up a State to hold my showVid variable
  //Getting my tunes object which contains airtable api data
  let video = tunes.map((video) =>
    (
      <Tune video={video} />
      //Creating a clickable button
    ))
  return video
}










export default Player;
