import React, { useState, state } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

//Creating a function called 'Like' that will pass in data(tunes)
let Like = ({ tunes }) =>
{
  //Setting up a State to hold the number of times the like button has been pressed
  let [Likes, setlikes] = useState(false)
  //Creating a variable to hold my like button
  let newLike = <button className="like"  onClick={() => setlikes(Likes + 1)}>Likes: {Likes}</button>
  //return button 
  return newLike
}

export default Like;





