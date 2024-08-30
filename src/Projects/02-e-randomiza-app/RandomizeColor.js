import React from 'react'
import Title from '../../Components/Title'





const EventHandler=(e)=>{

    let body=document.querySelector('body');
    body.style.background=RandomColor();

    e.target.style.background=RandomColor();
}
function RandomColor(){
    let letters="1234567890ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color;
}

function EventHandlersec(event){
    document.write("handled")

}

function RandomizeColor() {
  return (
    <div className='container'>
        <Title text={"Random color"} classes={"mb-4"}/>
        <button className='btn btn-danger' onClick={EventHandler}>Click me</button>
        <button className='btn btn-primary'onClick={(event)=>{EventHandlersec(event)}}>Click me</button>
        <button className='btn btn-success'onClick={EventHandler}>Click me</button>
        <button className='btn btn-warning'onClick={EventHandler}>Click me</button>
    </div>
  )
}

export default RandomizeColor