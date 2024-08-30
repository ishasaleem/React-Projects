import React ,{useState}from 'react'
import Buttons from '../../Components/Buttons'

function TemperatureController() {
  const [temperature,settemperature]=useState(0)
  const increaseTemperature=()=>{
    settemperature(temperature+1)
  }
  const decreaseTemperature=()=>{
    settemperature(temperature-1)
  }
  return (
    <div className='container mt text-center'>
    <div className='card bg-light m-auto'style={{width:"200"}}>
      
        <h1 className={`text-light card border-50 ${temperature >0?"bg-danger":"bg-info"}`}style={{height:"150",width:"150",border:"2px solid #666"}}>{temperature}</h1>
  <div className='d-flex my-2'> 
    <br></br>  <br></br>  <br></br> 
    <Buttons text="+" btn-class={"btn-lg"} onClick={increaseTemperature}/>
    <Buttons text="-" btn-class={"btn-lg"} onClick={decreaseTemperature}/>
  </div>

        </div></div>
  )
}

export default TemperatureController