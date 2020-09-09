import React from 'react'
import GetData from './GetData'
import './App.css'

export default function PlayList({artist, title, link, thumbnail})
{
  console.log(artist)
  
  let setImages = [thumbnail]
  
  
  // for (let pic in setImages)
  // {
  //   let pics = setImages[pic]
  //   console.log(pics)
  //   let scrollDiv = document.getElementsByClassName("scrollList")
  //   let imageLink = document.createElement("a").setAttribute("class", "cover")
  //   // let imageLink = document.
  //   let image = document.createElement("img").setAttribute("src", pics)
      
  // }
  return (
    <div class="scrollList">
      <a><img src={setImages}></img></a>
    </div>
  )
}
