import React from 'react'
import Buttons from "../../Components/Buttons"
import { FaAddressBook, FaArrowsAltV } from 'react-icons/fa'

function SearchFilter({handleSearchContact,handleToggleContacts,handleToggleAZ}) {
  return (
  <section className='text-center'>

    <Buttons icon={<FaAddressBook/>} onClick={handleToggleContacts}/>
 <input onChange={(e)=>handleSearchContact(e.target.value)}type="text"placeholder='search by first name' style={{padding:" .3rem .5rem"}}/>
    <Buttons icon={<FaArrowsAltV/>} onClick={handleToggleAZ}/>
  </section>
  )
}

export default SearchFilter