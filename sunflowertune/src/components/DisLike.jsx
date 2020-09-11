import React, { useState, state } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

//Creating a function called 'DisLike' that will pass in data(tunes)
let DisLike = ({ tunes }) =>
{
  //Setting up a State to hold the number of times the dislike button has been pressed
  let [DisLikes, setDisLikes] = useState(false)
  //Creating a variable to hold my dislike button
  let newDisLike = <button className="dislike" onClick={() => setDisLikes(DisLikes + 1)}>Dislikes: {DisLikes}</button>
  //return button  
  return newDisLike
}

export default DisLike;





