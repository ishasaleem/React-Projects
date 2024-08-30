import React, { useState, useEffect } from 'react';
import { AiFillRobot, AiOutlineRobot } from "react-icons/ai";

function SpeechNarrator({ text }) {
  const splitText = (text, from, to) => [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to)
  ];

  const [highlightSection, setHighLightSection] = useState({ from: 0, to: 0 });
  const [showPlay, setShowPlay] = useState(false);
  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text);

  useEffect(() => {
    // Set up the speech synthesis utterance and event listener
    utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
      setHighLightSection({ from: charIndex, to: charIndex + charLength });
    });

    // Cleanup the utterance and remove event listeners when the component unmounts
    return () => {
      synth.cancel();
      utterance.removeEventListener("boundary", () => {});
    };
  }, [text]); // Re-run only when the text changes

  const handlePlay = () => {
    synth.speak(utterance);
    setShowPlay(true);
  };

  const handlePause = () => {
    synth.pause();
    setShowPlay(false);
  };

  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: "pointer"
  };

  const HighLightedText = ({ text, from, to }) => {
    const [start, highlight, finish] = splitText(text, from, to);

    return (
      <div className='cardddi' style={{ width: 500 }}>
        {start}
        <span className='bg-warning'>{highlight}</span>
        {finish}
      </div>
    );
  };

  const [rateValue,setRateValue]=useState("")
  const handleRateValue=(e)=>{
    setRateValue(e.target.value)
  }
  utterance.rate=rateValue;
  return (
    <div className='container d-flex flex-column' style={{ gap: 30 }}>
      <h1>SpeechNarrator</h1>
      {showPlay ? (
        <AiOutlineRobot style={robotStyle} onClick={handlePause} />
      ) : (
        <AiFillRobot onClick={handlePlay} style={robotStyle} />
      )}
      <HighLightedText text={text} {...highlightSection} />
   
   <div className='form-group'>
    <label>Rate: {rateValue}</label>
    <input type='range' step=".1" max="2"min=".5"value={rateValue} onChange={handleRateValue}/></div> </div>
  );
}

export default SpeechNarrator;
