import React from 'react'
import ReactPlayer from 'react-player'

const Videos = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=DfbKZwWzlLM"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=Dt6bgxxbNzU&t=71s"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=v4v6ImsP3Ok"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=46ETV8-Xj-4"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=WLOwEhgVlmQ"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=L2PcMYwhJuk&t=23s"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=1XVIclIjRcc"
        controls={true}
      />
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=EZmWhoUAF0Y&t=112s"
        controls={true}
      />
    </div>
  )
}

export default Videos
