import React from 'react';
import PlayList from './PlayList'
import GetData from './GetData'
import PlayTunes from './Playtunes'
import LikeTune from './LikeTune'
import DislikeTune from './DislikeTune'

function App()
{
  return (
    <>
      <h1 id="title">SunflowerTunes</h1>
      <GetData />
      <PlayList />
      <PlayTunes />
      <LikeTune />
      <DislikeTune />
    </>
  )
}

export default App;
