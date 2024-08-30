import React,{useState} from 'react'
import "./Lockslider.css"
import LockSLider from './LockSLider'
import {  AiFillUnlock } from 'react-icons/ai'
import birds from "./imgg/birds.jpg"
import home from "./imgg/home.jpg"
function SlideToUnlock() {
    const [showLockSlider,setshowLockSlider] = useState(true);
    const [LockSlidervalue,setLockSlidervalue] = useState(0);
     const handleLockSliderInput=(e)=>{
        setLockSlidervalue(e.target.value);
        console.log(e.target.value);
        setshowLockSlider(false);
     }
    const [uiprops,setUiprops]=useState({
        uiText:"unlock screen",
        uiColor:'#eee',
        uiBg:`url(${birds}) center/cover no-repeat`,
    })
  return (
    <div className='container text-center border-20 shadow-md'style={{
        height:"70vh",
        marginTop:"15vh",
        width:340,
        background:uiprops.uiBg,
        border:"4px solid #000"
    }}>
        <h1 className='Title'style={{color:uiprops.uiColor }}>{uiprops.uiText}</h1>
        {showLockSlider?(
       <LockSLider width={"250px"}handleInput={handleLockSliderInput}value={LockSlidervalue}/>

          ): ( <AiFillUnlock className='unlockIcon'/>
     )}
    </div>
  )
}

export default SlideToUnlock