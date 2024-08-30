
import React, { useEffect, useRef, useState } from 'react'
import Buttons from '../../Components/Buttons'
import FormGroup from '../../Components/FormGroup'
import AnimatedText from "react-animated-text-content"
function TextAnimationApp() {
 const[inputvalue,setInputvalue]=useState("")
 const handleInputChange=(e)=>{
setInputvalue(e.target.value)
 }
 const[animatedtext,setAnimatedText]=useState("")
 const handleclear=()=>{
    setAnimatedText(inputvalue)
    setInputvalue(()=>"")
 }
 let inputText=useRef(null);
   

    useEffect(() => {
       
        inputText.current.focus();
      }, []);


    return (
    <div className='container text-center'>
        
        <form className='container d-flex mt-4'onSubmit={(e)=>e.preventDefault()}>
       <FormGroup labelText={"type your text tobe animated"}inputType={"text"}values={inputvalue}placeholder={"Your text"}Onchange={handleInputChange} reference={inputText}/>
        <Buttons onClick={handleclear}text={"clear"} btnclass={"btn-warning"}/></form>
        {animatedtext&&(<AnimatedText  className='sub' type='char'interval={0.04}duration={1.1} animation={{y:"250px",x:"-150px"}} >{animatedtext}</AnimatedText>)}</div>
  )
}

export default TextAnimationApp