import React,{useState} from 'react'

function SliderComp({SlideValue,handleInput,bgcolor,txtcolor}) {
  const sliderstyle={
    appearance:'none',
    background:!bgcolor?"lightgray":bgcolor,
    width:"100%",
    height:80,
    cursor:"pointer",
    opacity:"0.7"



  }
  return (

    <div className='container d-flex flex-column ' style={{gap:100 }} style={sliderstyle}>
     <input type='range'min="0" max={100}  value={SlideValue} onInput={handleInput}/>
     <div className="text-center" style={{
            color:!txtcolor?'black':txtcolor,
            height:'40px',
            background:!bgcolor?'lightgray':bgcolor,
            width:'40px',
            fontWeight:"600",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"50%",

        } }>
    
     {SlideValue} </div>
     </div>
    
)
}

export default SliderComp