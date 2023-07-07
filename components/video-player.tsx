import React, { MouseEventHandler, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";

type VideoControlsProps = {
  progress: number,
  duration: number,
  playing: boolean,
  setPlaying: (playing: boolean) => void,
  seekTo: (seconds: number) => void
}

const VideoControls = ({
  progress,
  duration,
  playing, setPlaying,
  seekTo,
}: VideoControlsProps) => {

  const [seekingProgress, setSeekingProgress] = useState(-1)
  const seeking = useRef(false)

  const handleClick: MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault()
    setPlaying(!playing)
  }

  console.log('controls rendered', seekingProgress, progress)

  return (
    <div className="flex flex-col absolute w-full bottom-0 bg-opacity-50 min-h-min pb-0.5 bg-black">

      {/* 进度条 */}
      <input
        // className={styles.progress}
        type='range'
        min={0} max={0.999999} step='any'
        value={(seekingProgress !== -1 ? seekingProgress : progress) / duration}
        onMouseDown={e => { seeking.current = true }}
        onChange={(e) => {
          if (!seeking.current) {
            return
          }
          setSeekingProgress(duration * e.target.valueAsNumber)
        }}
        onMouseUp={e => {
          setSeekingProgress(-1)
          seekTo(duration * e.currentTarget.valueAsNumber) // fixme ?
          seeking.current = false
        }}
      ></input>

      {/* 其他控制按钮 */}
      <div className="flex flex-row items-center pl-2">
        {/* 播放/暂停按钮 */}
        <div className="mr-3">
          {
            playing ? <FaPause color="#f6f6f6" onClick={handleClick}></FaPause> : <FaPlay color="#DDDDDD" onClick={handleClick}></FaPlay>
          }
        </div>
        {/* 播放时间 */}
        <span className="text-[#f6f6f6]">{formatTime(progress)} / {formatTime(duration)}</span>
      </div>
    </div>
  )
}

function formatTime(seconds: number) {
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

type VideoPlayerProps = {
  url: string,
  progress: number,
  setProgress: (progress: number) => void
}

export default function VideoPlayer({
  url,
  progress,
  setProgress,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)

  const handleProgress = (props: OnProgressProps) => {
    setProgress(props.playedSeconds)
  }
  const handleSeek = (seconds: number) => { setProgress(seconds) }

  const handleDuration = (seconds: number) => {
    setDuration(seconds)
  }

  let player: ReactPlayer
  const reactPlayerRef = (p: ReactPlayer) => { player = p }
  const seekTo = (progress: number) => { player.seekTo(progress, 'seconds') }

  return (
    <div className="w-full h-full relative">
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
        progress={progress}
        duration={duration}
        playing={playing} setPlaying={setPlaying}
        seekTo={seekTo}
      ></VideoControls>
    </div>
  )

}
