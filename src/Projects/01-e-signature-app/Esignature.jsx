import React ,{useState}from 'react'
import Title from '../../Components/Title'

function Esignature() {
     document.body.style.background="#eee"
    const inlinestyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        position: "relative",
        padding: ".35rem 0"
    }

    const [name,setname]=useState("enter your name")
    const [date,setdate]=useState("Dob")
    const HandleNameChange=(e)=>
    {
        setname(e.target.value);
    }
    const HandleDateChange=(e)=>
        {
            setdate(e.target.value);
        }
  return (
    <div className='text-container'> 
       <Title text={name} classes="main"/>
       <Title text={date} classes="sub"/>
       <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ducimus repellat placeat obcaecati possimus 
         corrupti numquam modi eligendi doloribus, beatae nam nisi reiciendis
          architecto cupiditate saepe incidunt? Magnam maxime est animi.</p>
          <footer className='d-flex'style={{ justifyContent: "space-around", top: "40vh", position: 'relative' }}>
      <input type='date'value={date}style={{inlinestyle}} onChange={HandleDateChange}/>
      <input type='text'value={name}style={{inlinestyle}} onChange={HandleNameChange}/>
      </footer>
    </div>
  )
}

export default Esignature