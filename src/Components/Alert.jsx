import React,{useEffect, useState} from 'react'
import Buttons from './Buttons';

function Alert({typealert,message,delay=false,delayTime=3000}) {
    const [showAlert,setshowAlert]=useState(true);

    const CloseAlert=(e)=>{
        e.target.parentElement.parentElement.classList.add("fadeAlert")
        setTimeout(() => {
            setshowAlert(false )
        }, 300);
    }
useEffect(()=>{
    delay &&setTimeout(() => {
        setshowAlert(false)
    }, delayTime);
}
)
  return (
    showAlert && <div className={`alert alert-${typealert}`}>  
      
      <div className='alert-close'>
        <span className='mr-1'>{message}</span>
        <Buttons btnclass={"btn-close"} text={"X"}onClick={CloseAlert}/>
      </div>
        </div>
  )

}

export default Alert