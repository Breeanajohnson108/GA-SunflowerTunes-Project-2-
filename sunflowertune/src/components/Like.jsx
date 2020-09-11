import React, { useState, state } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

let Like = ({ tunes }) =>
{
  let [Likes, setlikes] = useState(false)  
  let newLike = <button className="like"  onClick={() => setlikes(Likes + 1)}>Likes: {Likes}</button>
    
  return newLike
}







export default Like;





