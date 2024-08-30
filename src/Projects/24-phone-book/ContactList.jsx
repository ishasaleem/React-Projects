import React from 'react'
import Contact from './Contact'

function ContactList({contacts}) {
  
  const generateRandomImg=()=>{
    const types=[
      "male",
      "female",
      "human",
      "gridy",
      "identicon",
      "avataars",
      "jdenticon",
      "micah",
      "bottts",
      "initials"
    ];
    console.log(types[0]);
    return types[Math.floor(Math.random()*types.length)];
  }
  return (
    <ul>

   {contacts.map((contact,id)=>{
    return(
        <Contact key={"id"}icon={`https://api.dicebear.com/9.x/lorelei/svg?`} firstName={contact.first_name} lastName={contact.last_name} phoneNr={contact.phone}/>
    );
  })}
  </ul>
  )
}

export default ContactList