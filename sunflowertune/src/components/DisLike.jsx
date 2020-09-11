import React, { useState, state } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

let DisLike = ({ tunes }) =>
{
  let [DisLikes, setDisLikes] = useState(false)  
  let newDisLike = <button className="dislike" onClick={() => setDisLikes(DisLikes + 1)}>Dislikes: {DisLikes}</button>
    
  return newDisLike
}







export default DisLike;





