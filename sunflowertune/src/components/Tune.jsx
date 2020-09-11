import React, { useState } from 'react';
import Like from './Like'
import Dislike from './DisLike'

const Tune = ({ video }) => {
  const [showVid, setShowVid] = useState(false);
  return (
    <div className="vidContainer">
      <button className="playMe" onClick={() => setShowVid(!showVid)}>Play Me</button>
      {
        // Making the 'playMe' button be able to toggle between hiding and showing video player when clicked on
        showVid &&
          <div>
            <>
              {/* Found the iframe from W3schools, citing */}
              <iframe className="videos" width="560" height="315" src={video.fields.link}
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen ></iframe >
              <Like />
              <Dislike />
            </>
          </div>
      }
    </div>

  )
}

export default Tune;
