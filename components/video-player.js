import { useState } from "react";
import ReactPlayer from "react-player";

// function SeekTo(seconds, player) {
//     player.
// }

export default function VideoPlayer({
    url,
    seconds,
}) {
    const [playing, setPlaying] = useState(false)

    return (
        <ReactPlayer
            url={url}
            playing={playing}
        ></ReactPlayer>
    )

}

/*
import { useState } from "react";
import ReactPlayer from "react-player";

export default function Player() {
  const handleProgress = (obj) => {
    console.log(obj)
  }
  const handlePlay = () => {
    console.log('played')
  }
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U')

  const handleVideoInputChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setUrl(url)
  }

  const [playing, setPlaying] = useState(false)
  const handleButtonClick = (event) => {
    setPlaying(!playing)
  }

  const [progress, SetProgress] = useState(0)
  const handleInputProgressChange = (e) => {
    const value = e.target.value;
    // 使用正则表达式验证输入的是否为数字
    if (/^\d*$/.test(value)) {
      SetProgress(parseInt(value));
    }
  }

  let player
  const ref = p => { player = p }
  const handleSubmit = (e) => {
    e.preventDefault()
    player.seekTo(progress, 'seconds')
  }

  return (
    <div>
      <input type="file" id="videoFile" accept="video/*" onChange={handleVideoInputChange} />
      <ReactPlayer
        ref={ref}
        url={url}
        onPlay={handlePlay}
        onProgress={handleProgress}
        playing={playing}
      >
      </ReactPlayer>
      <div>
      <button onClick={handleButtonClick}>{playing ? 'pause' : 'play'}</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={progress}
          onChange={handleInputProgressChange}
        />
        <button type="submit">提交</button>
      </form>
      </div>
    </div>
  )
}
*/