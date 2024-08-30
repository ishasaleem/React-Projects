import React, { useState } from 'react';
import SliderComp from './SliderComp';
import Title from '../../Components/Title';

function SliderApp() {
  const [slideValue, setSlideValue] = useState(30);

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  };

  let bgcolor;
  let txtcolor;

  if (slideValue < 25) {
    bgcolor = "red";
    txtcolor = "yellow";
  } 
   if (slideValue >= 25 && slideValue <= 50) {
    bgcolor = "blue";
    txtcolor = "white";
  } 
 else if (slideValue >= 50 && slideValue <= 70) {
    bgcolor = "purple";
    txtcolor = "white";
  } 
  else if (slideValue >= 70 && slideValue <= 80) {
    bgcolor = "white";
    txtcolor = "black ";
  } 
  else {
    bgcolor = "orange"; 
    txtcolor = "green"; 
  }

  return (
    <div className='text-center'>
      <Title text={"slide to grow"} />
      <SliderComp 
        SlideValue={slideValue} 
        handleInput={handleSliderValueChange} 
        bgcolor={bgcolor} 
        txtcolor={txtcolor} 
      />
    </div>
  );
}

export default SliderApp;
