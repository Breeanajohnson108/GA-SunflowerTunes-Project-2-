import React from 'react';
import PlayList from './PlayList'
import GetData from './GetData'
import PlayTunes from './Playtunes'


function App()
{
  return (
    <>
      <h1 id="title">SunflowerTunes</h1>
      <GetData />
      <PlayList />
      <PlayTunes />
    </>
  )
}

export default App;
