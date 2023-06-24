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
        <>
            <form onSubmit={handleUrlSubmit}>
                <input type="text" name="text-input" placeholder="input url here" value={inputUrl} onChange={handleUrlChange}></input>
                <button type="submit">submit</button>
            </form>
            <p>or</p>
            <div>
                <span>open by file</span>
                <input type="file" accept="video/*" onChange={handleFileInputChange} />
            </div>
        </>
    )
}

function Player() {
    const [url, setUrl] = useState("")

    return (
        url === "" ?
            <VideoLoader setUrl={setUrl}></VideoLoader> :
            <VideoPlayer seconds={0} url={url}></VideoPlayer>
    )

}

export default Player;

