import React, { useRef, useEffect, useState } from 'react';
import Title from '../../Components/Title';
import contactData from './Data.json';
import Contact from './Contact';

function FilterContactsApp() {
  let inputSearch = useRef(null);
  const [searchContact, setSearchContact] = useState("");

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  return (
    <div className='text-center'>
      <Title text={"Filter contacts App"} />
      <input
        type='text'
        ref={inputSearch}
        placeholder='Search by first name'
        className='mb-2'
        style={{ padding: ".3rem .5rem", fontSize: "1rem" }}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section className='d-flex' style={{ gap: "20px", maxWidth: 1600, margin: "auto", flexWrap: 'wrap' }}>
        {contactData
          .filter((contact) => {
            if (searchContact === "") {
              return true; 
            }
            return contact.name.toLowerCase().includes(searchContact.toLowerCase());
          })
          .map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </section>
    </div>
  );
}

export default FilterContactsApp;
