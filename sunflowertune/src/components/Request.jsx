import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


let Request = ({ tunes }) => 
{
  let newRequest = 
    <form className="form">
      <h1>Request tunes</h1>
        <label>
          Artist:
          <input type="text" name="name" />
      </label>
      <label>
          Title:
          <input type="text" name="name" />
      </label>
      <label>
          Embedded Link(video link):
          <input type="text" name="name" />
        </label>
      <label>
          Album Cover link:
          <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      </form>
  return newRequest
}

export default Request;