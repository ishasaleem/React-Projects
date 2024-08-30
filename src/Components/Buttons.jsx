import React from 'react'

function Buttons({text,btnclass,onClick,icon}) {
  return (
    <div>
        <button className={`btn-fcm ${btnclass}`}onClick={onClick}>{icon}{!text?"click me":text}</button>

    </div>
  )
}

export default Buttons