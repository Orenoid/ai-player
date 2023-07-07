import React, { useState } from "react";
import VideoPlayer from "./video-player";

type VideoLoaderProps = {
    setUrl: React.Dispatch<React.SetStateAction<string>>;
}

function VideoLoader({ setUrl }: VideoLoaderProps) {

    const [inputUrl, setInputUrl] = useState("")

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files === null) {
            return
        }
        const url = URL.createObjectURL(files[0]);
        setUrl(url)
    }

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(event.target.value)
    }

    const handleUrlSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

type PlayerProps = {
    className: string
}

function Player({className}: PlayerProps) {
    const [url, setUrl] = useState("")
    const [progress, setProgress] = useState(0)

    const setCoreProgress = (seconds: number) => {
        setProgress(seconds)
    }
    const getCoreProgress = () => progress

    return (
        <div className={className}>
            {
                url === "" ?
                    <VideoLoader setUrl={setUrl}></VideoLoader> :
                    <VideoPlayer progress={progress} setProgress={setCoreProgress} url={url}></VideoPlayer>
            }

        </div>
    )

}

export default Player;

