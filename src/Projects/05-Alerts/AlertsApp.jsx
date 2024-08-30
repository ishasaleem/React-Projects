import React from 'react'
import Alert from '../../Components/Alert'

function AlertsApp() {
  return (
    <div className='Container mx-auto'> 
    <Alert typealert={"green"} message={"Login successful"} />
    <Alert typealert={"orange"} message={"Time triggered"}delay={true} delayTime={1000 }/>
    </div>
  )
}

export default AlertsApp