import { useState } from "react";
import VideoPlayer from "./video-player";

function VideoLoader({ setUrl }) {

    const [inputUrl, setInputUrl] = useState("")

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setUrl(url)
    }

    const handleUrlChange = (event) => {
        setInputUrl(event.target.value)
    }

    const handleUrlSubmit = (event) => {
        event.preventDefault();
        setUrl(inputUrl)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-inherit h-full">
            <form onSubmit={handleUrlSubmit}>
                <input
                    type="text"
                    name="text-input"
                    placeholder="input url here"
                    value={inputUrl}
                    onChange={handleUrlChange}
                    className="bg-gray-200 rounded-lg px-4 py-2 mb-4 w-64 text-sm"
                />
                <button type="submit" className="bg-green-500 text-white rounded-lg px-4 py-2 text-sm">
                    submit
                </button>
            </form>
            <p className="text-white text-base">or</p>
            <div>
                <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileInputChange}
                    className="bg-gray-200 rounded-lg px-4 py-2 text-sm"
                />
            </div>
        </div>
    )

}

function Player({ className }) {
    const [url, setUrl] = useState("")
    const [progress, setProgress] = useState(0)

    const setCoreProgress = (seconds) => {
        setProgress(seconds)
    }
    const getCoreProgress = () => seconds

    return (
        <div class={className}>
            {
                url === "" ?
                    <VideoLoader setUrl={setUrl}></VideoLoader> :
                    <VideoPlayer progress={progress} setProgress={setCoreProgress} url={url}></VideoPlayer>
            }

        </div>
    )

}

export default Player;

