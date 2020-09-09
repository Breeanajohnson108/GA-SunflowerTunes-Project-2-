import React from 'react'
import axios from 'axios'

export default class GetData extends React.Component
{
  
  state = 
    {
      tunesData: []
    }
  
  componentDidMount()
  {
    
    fetch('https://api.airtable.com/v0/appwmk7KWbWQtvEEW/playlist?api_key=keyHS2cdOW12Q7yll').then(res => res.json()).then(
    res =>
      {
        console.log(res.records);
        this.setState({tunesData: res.records})
      }
    )
    
  }
  
  render()
  {
    return (
      null
    )
  }
}
