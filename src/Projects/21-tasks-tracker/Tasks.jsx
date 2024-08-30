import React from 'react'
import Buttons from '../../Components/Buttons'

function Tasks({date,setDate,onClick,setType,type}) {
  return (
<div className='d-flex'style={{justifyContent:"space-between", borderBottom:"1px solid #666" ,marginBottom:"2rem"}}>
    <input onChange={setDate}type='datetime-local'value={date}/>
    <input onChange={setType}placeholder={"Specify the task"}type='text'value={type}/>
    <Buttons text ={"+Add"} btnclass={"btn-info"}onClick={onClick}/></div>
  )
}

export default Tasks