import React from 'react'
import axios from 'axios'
import PlayList from './PlayList';

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
        this.setState({tunesData: res.records});
        // for (let property in data)
        // {
        //   let properties = data[property].fields;
        //   let title = properties.title;
        //   let artist = properties.artist;
        //   let link = properties.link;
        //   let coverImage = properties.thumbnail;
        // }
      }
    ).catch(error => console.log(error))
  }
  
  render()
  {
    let {tunesData} = this.state
    return (
      tunesData.map(data => (
        <PlayList {...data.fields} key={data.fields.id} />
      ))
    )
  }
}
