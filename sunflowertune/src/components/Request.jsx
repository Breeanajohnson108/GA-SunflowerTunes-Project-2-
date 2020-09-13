import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





let Request = () => {
  // Creating a State to hold my variable 'tunes' which will contain my api data
  const [tunesData, setTunesData] = useState([])
  //fields is a variable of data in state, <- getter variable. holds data
  //setFields is a method that sets the data in state <- setter method sets data
  //useState is a method that sets the inital value of the getter variable/data in state 
  const [fields, setFields] = useState({

    artist: '',
    title: '',
    link: '',
    thumbnail: '',
  })


  //Request Airtable API

  let createData = async (e) => {
    e.preventDefault()
    console.log(fields)
    //Creating a variable 'airtableUrl' that will hold my api url
    const airtableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/playlist`
    //Using axios to pass in my api key which will give me access to my airtable
    const config = {
      headers:
      {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    }
    //{fields: fields} The first fields is required key for airtable, the second fields is our variable in state.
     await axios.post(airtableUrl, { fields }, config);
    setTunesData([
      ...tunesData,
      {fields}
    ])

  };

  //handleChange is being called for each keystroke of an input field below 
  let handleChange = (e) => {
    //Destructuring the name and value of each event/keystroke (e.target). e = event
    //Another way to write the line below w/o destructuring:
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target
    // setFields is my setter for fields in state
    setFields({ 
      ...fields,
      [name]: value
    })
  }

  return(
      // Used "https://reactjs.org/docs/forms.html" to create react style form
      <form className="form" onSubmit={(e) => createData(e)}>
        <h1>Request tunes</h1>
        <label>
          Artist:
        <input type="text" name="artist" value={fields.artist} onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Title:
        <input type="text" name="title" value={fields.title} onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Embedded Link(video link):
        <input type="text" name="link" value={fields.link} onChange={(e) => handleChange(e)} />
        </label>
        <label>
          Album Cover link:
        <input type="text" name="thumbnail" value={fields.thumbnail} onChange={(e) => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
    // ))

}





















// //Creating a function called 'Request' that will pass in data(tunes)
// let Request = () => 
// {
//   let newRequest = 

//   const [tunes, setTunes] = useState([])
//   useEffect(() =>
//   {
//     let data = async () => {
//       let airtableLink = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/playlist`
//       let recordData = await axios.get(airtableLink,
//         {
//           headers:
//           {
//             'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//           },
//         })
//       setTunes(recordData.data.records)
//     };
//     data()
//   }, [])





//     // Used "https://reactjs.org/docs/forms.html" to create react style form
//     <form className="form">
//       <h1 className="formTitle">Request tunes</h1>
//         <label className="formLabel">
//         Artist:
//           <br></br>
//         <br></br>
//           <input type="text" name="name" />
//       </label>
//       <br></br>
//       <br></br>
//       <label className="formLabel">
//           Title:
//           <br></br>
//           <input type="text" name="name" />
//       </label>
//       <br></br>
//       <br></br>
//       <label className="formLabel">
//           Embedded Link(video link):
//           <br></br>
//           <input type="text" name="name" />
//       </label>
//       <br></br>
//       <br></br>
//       <label className="formLabel">
//           Album Cover link:
//           <br></br>
//           <input type="text" name="name" />
//       </label>
//       <br></br>
//       <input type="submit" value="Submit" />
//       </form>
//   return newRequest
// }

export default Request;