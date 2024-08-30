import React, { useState } from 'react';
import SpeechNarrator from './SpeechNarrator';

function SpeechSynthesizerApp() {
  const [text, setText] = useState("Type your text here...");

  return (
    <div className='d-flex flex-column container'>
      <SpeechNarrator text={text} />
      <textarea 
        cols="30" 
        rows="10" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        style={{ marginTop: '20px' }} 
      />
    </div>
  );
}

export default SpeechSynthesizerApp;
