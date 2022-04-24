import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.css'

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://media.istockphoto.com/videos/apple-tree-branch-with-green-foliage-and-heavy-rain-in-the-sunlight-video-id1225085759"
      />
    </div>
  );
}

export default Watch