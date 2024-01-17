import { useState, useRef } from 'react';
import '../styles/RadioPlayer.css';

function RadioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("http://kqwz.link:8000/kqwz.opus"));
    const musicNotesRef = useRef(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);

        if (isPlaying) {
            musicNotesRef.current.style.display = "none";
            audioRef.current.pause();
        } else {
            musicNotesRef.current.style.display = "flex";
            audioRef.current.play();
        }
    };
  return (
    <center>
    <div className="radioContainer">
        <div className="musicNotes" ref={musicNotesRef} style={{ color: "white" }}>
            ♪  
            <div className="doubleNote">
                ♫ 
            </div>
            ♪
        </div>
        <div className="handle">
            <div className="handleBarLeft"></div>
            <div className="handleCushion"></div>
            <div className="handleBarRight"></div>
        </div>
        <div className="radio">
            <div className="radioTopSection">
                <div className="radioButtonBig"></div>
                <div className="radioButtonSmall"></div>
                <div className="volumeSlider"></div>
                <div className="radioButtonSmall"></div>
                <div className="radioButtonBig"></div>
            </div>
            <div className="radioBottomSection">
                <div className="discPlayer">
                    <div className="disc"></div>
                </div>
                <div className="playButtonContainer" onClick={togglePlay}>
                    <div className={`playButtonLeft ${isPlaying ? 'active' : ''}`}></div>
                    <div className={`playButtonRight ${isPlaying ? 'active' : ''}`}></div>
                </div>
                <div className="discPlayer">
                    <div className="disc"></div>
                </div>
            </div>
        </div>
    </div>
    </center>
  )
}

export default RadioPlayer