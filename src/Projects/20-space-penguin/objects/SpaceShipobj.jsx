import React from 'react'

function SpaceShipobj({changeShip,scale,start}) {
 let animation=start;
    return (
    <>
    <img src={changeShip}style={{position:"absolute",bottom:50,zIndex:1,width:scale}}alt="ship" className={animation}/>
    </>
    
  )
}

export default SpaceShipobj