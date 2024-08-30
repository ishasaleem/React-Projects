import React, { useEffect, useState } from 'react'
import "./Ship.css"
import penguin from"./Svg/penguin-svgrepo-com.svg"
import Buttons from '../../Components/Buttons'
import planet from "./Svg/planet-earth-svgrepo-com.svg"
import SpaceShipobj from './objects/SpaceShipobj'
import ship from "./Svg/spaceship-svgrepo-com.svg"
import moons from "./Svg/reshot-icon-saturn-X4YDBANL85.svg"
import Moonobj from './objects/Moonobj'
import Planetobj from './objects/Planetobj'
function SpacePenguinApp() {
    const [shipAction,setShipAction]=useState();
    const [TransformScale,setTransformScale]=useState(200);
    const [shipProps,setShipProps]=useState({
        action:"",
        scale:200
    })
   {/* const StartShip=()=>{
        setShipAction("fly")
        setTransformScale(50)
    }
        
    const LandShip=()=>{
        setShipAction("land")
        setTransformScale(200)
    }*/}
const StartShipp=()=>{
    setShipProps({
        action:"fly",
        scale:50,
    })
}
const LandShipp=()=>{
    setShipProps({
        action:"land",
        scale:200,
    })
}
const[shipType,setShipType]=useState(ship);
useEffect(()=>{
    if(shipProps.action==="land"){
        setShipType(penguin);
        setTimeout(() => {
            setShipType(ship);
            
        }, 5500);
    }
    if (shipProps.action==="fly"){
        setShipType(ship);
    }
},[shipProps.action])
  return (
    <div className='space'>SpacePenguinApp
   
   
 
    <Buttons text={"Land"}btnclass={"btn btn-danger"}onClick={LandShipp}/>
       
    <section className='env'> 
    <SpaceShipobj changeShip={shipType}scale={shipProps.scale} start={shipProps.action}/>
<Moonobj moon={moons} />
<Planetobj planet={planet}/>
</section>
    <Buttons text={"lauch"}btnclass={"btn btn-warning"}onClick={StartShipp} />
    
    </div>
)
}

export default SpacePenguinApp