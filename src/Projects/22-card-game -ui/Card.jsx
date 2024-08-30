import React from 'react'
import shield from "./Svg/desktop-icons-svgrepo-com.svg"
import card2 from"./Svg/game-card-svgrepo-com.svg"
let iconStyle={
  marginRight:10,
  width:20,
  background:"transparent"
}
function Card({player,unitTypeName ,defenseValue ,unitCardimg,card2eValue}) {
  return (
    <div className={`cardddi ${player==="player1"?"cardInfo":"cardDanger"} style={{width:"180px"}` }>
      <section className='card-header d-flex'style={{justifyContent:'space-between'}}>
        <div className='defense'>
          <img src={""}style={iconStyle} alt='defense img'/>
          <span>{!defenseValue && "00"}</span></div></section>
         <section> <div className='card2'>
          <img src={card2}style={iconStyle} alt='defense img'/>
          <span>{!card2eValue && "00"}</span></div></section>
          <div className='card-body'>
            <h4 className='mb-1'>
              {!unitTypeName?"unit type name":unitTypeName}</h4>
              <img src={""}style={{backgroundColor:"white",color:"#fff"}}/></div>Card</div>
  )
}

export default Card