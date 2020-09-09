import React from 'react'
import PlayList from './PlayList';
import PlayTunes from './Playtunes'

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
      }
    ).catch(error => console.log(error))
  }
  
  render()
  {
    let {tunesData} = this.state
    return (
     
      tunesData.map(data =>
        (
          <>
            <PlayList {...data.fields} key={data.id} />
            <PlayTunes {...data.fields} key={data.fields.id} />
          </>
          
        ))
      
    )
  }
}
