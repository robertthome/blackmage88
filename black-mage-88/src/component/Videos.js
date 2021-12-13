import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import '../component/compStyles/Videos.css'

class Videos extends Component {
  render() {
    return (
      <div className="video-container">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=DfbKZwWzlLM"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    )
  }
}
// {/* <ReactPlayer
// className="react-player marv"
// url="https://www.youtube.com/watch?v=Dt6bgxxbNzU&t=71s"
// controls={true}
// width="100%"
// height="100%"
// />
// <ReactPlayer
// className="react-player"
// url="https://www.youtube.com/watch?v=v4v6ImsP3Ok"
// controls={true}
// width="100%"
// height="100%"
// />
// <ReactPlayer
// className="react-player"
// url="https://www.youtube.com/watch?v=46ETV8-Xj-4"
// controls={true}
// width="100%"
// height="100%"
// />
// <ReactPlayer
// className="react-player"
// url="https://www.youtube.com/watch?v=WLOwEhgVlmQ"
// controls={true}
// width="100%"
// height="100%"
// />
// <ReactPlayer
// className="react-player"
// url="https://www.youtube.com/watch?v=L2PcMYwhJuk&t=23s"
// controls={true}
// width="100%"
// height="100%"
// />
// <ReactPlayer
// className="react-player"
// url="https://www.youtube.com/watch?v=EZmWhoUAF0Y&t=112s"
// controls={true}
// width="100%"
// height="100%"
// />
// <ReactPlayer
// className="react-player"
// url="https://www.youtube.com/watch?v=1XVIclIjRcc"
// controls={true}
// width="100%"
// height="100%"
// /> */}

export default Videos
