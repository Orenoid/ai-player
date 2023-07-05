import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

const VideoControls = ({
  progress, setProgress,
  duration,
  playing, setPlaying,
  seekTo,
}) => {

  const [seekingProgress, setSeekingProgress] = useState(-1)

  const handleClick = (e) => {
    e.preventDefault()
    setPlaying(!playing)
  }

  return (
    <div class="flex flex-col absolute w-full bottom-0 bg-opacity-50 min-h-min pb-0.5 bg-black">

      {/* 进度条 */}
      <input
        // className={styles.progress}
        type='range'
        min={0} max={0.999999} step='any'
        value={(seekingProgress !== -1 ? seekingProgress : progress) / duration}
        onChange={e => {
          setSeekingProgress(duration * e.target.value)
        }}
        onMouseUp={e => {
          setSeekingProgress(-1)
          seekTo(duration * e.target.value)
        }}
      ></input>

      {/* 其他控制按钮 */}
      <div class="flex flex-row items-center pl-2">
        {/* 播放/暂停按钮 */}
        <div class="mr-3">
          {
            playing ? <FaPause color="#f6f6f6" onClick={handleClick}></FaPause> : <FaPlay color="#DDDDDD" onClick={handleClick}></FaPlay>
          }
        </div>
        {/* 播放时间 */}
        <span class="text-[#f6f6f6]">{formatTime(progress)} / {formatTime(duration)}</span>
      </div>
    </div>
  )
}

function formatTime(seconds) {
  seconds = Math.floor(seconds);
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  var timeString = '';

  if (hours > 0) {
    timeString += hours.toString().padStart(2, '0') + ':';
  }

  timeString += minutes.toString().padStart(2, '0') + ':' + remainingSeconds.toString().padStart(2, '0');

  return timeString;
}



export default function VideoPlayer({
  url,
  progress,
  setProgress,
}) {
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)

  const handleProgress = (props) => {
    setProgress(props.playedSeconds)
  }
  const handleSeek = (seconds) => { setProgress(seconds) }

  const handleDuration = (seconds) => {
    setDuration(seconds)
  }

  let player
  const reactPlayerRef = p => { player = p }
  const seekTo = (progress) => {player.seekTo(progress)}

  return (
    <div class="w-full h-full relative">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        ref={reactPlayerRef}
        playing={playing}
        onPlay={() => { setPlaying(true) }}
        onPause={() => { setPlaying(false) }}
        onProgress={handleProgress}
        onSeek={handleSeek}
        onDuration={handleDuration}
        progressInterval={50}
      ></ReactPlayer>
      <VideoControls
        progress={progress} setProgress={setProgress}
        duration={duration} 
        playing={playing} setPlaying={setPlaying}
        seekTo={seekTo}
      ></VideoControls>
    </div>
  )

}
