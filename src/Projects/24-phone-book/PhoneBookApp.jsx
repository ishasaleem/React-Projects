import React, { useState } from 'react';
import Title from '../../Components/Title';
import ContactList from './ContactList';
import SearchFilter from './SearchFilter';
import { getContacts } from './db';
function PhoneBookApp() {
    const [showContacts, setShowContacts] = useState(true);
    const [sortAZ, setsortAZ] = useState(true);
const [searchContact,setSearchContact]=useState('')

    let dbContacts=getContacts();
const toggleContacts=()=>{
    showContacts?setShowContacts(false):setShowContacts(true);
}    
const toggleSortAZ=()=>{
    sortAZ?setsortAZ(false):setsortAZ(true);
}
return (
        <div>
            <Title text="Phone Book" />
            <main className='bg-dark text-light p-1'>
                <SearchFilter handleSearchContact={setSearchContact}handleToggleAZ={toggleSortAZ} handleToggleContacts={toggleContacts}/>
                <div style={{height: "600px", overflow: "auto"}}>
                    <h2 className='subtitle text-center'>Display Contacts</h2>
                    {showContacts && 
                    <ContactList 
                    contacts={
                sortAZ?
                dbContacts.sort((a,b)=>a.first_name.localeCompare(b.first_name))
                :
                dbContacts.sort((a,b)=>b.first_name.localeCompare(a.first_name)).filter((contact)=>{
                    if(searchContact===""){
                        return contact;

                    }
                    else if(contact.first_name.toLocaleLowerCase().includes(searchContact.toLowerCase())){
                        return contact
                    } 
                    
                })}/> }
         </div>   </main>
        </div>
    );
}

export default PhoneBookApp;
