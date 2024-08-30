import React from 'react'
import "./Lockslider.css"
function LockSLider({handleInput,sliderValue,width}) {
    let sliderstyle={
        appearance:"none",
        width:!width ?"280px":width,
        height:"50px",
        backgroundColor:"gray",
      outline:"none",
      borderRadius:"25px"
    }

  return (
   
        <input type="range"className='slider '
        style={sliderstyle}
        value={sliderValue}
        onInput={handleInput} ></input>
  )
}

export default LockSLider