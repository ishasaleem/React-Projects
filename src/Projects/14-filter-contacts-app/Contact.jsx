import React from 'react';

function Contact({ contact, width = 300 }) {
  return (
    <div key={contact.id} className='carddd bg-light m-auto' style={{ width: width, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', margin: '15px' }}>
      <div className='card-header' style={{ padding: "3px" }}>
        <div className='card-body text-left'>
          <h4 className='card-text small-text'>{contact.name}</h4>
          <p className='card-text small-text'>
            <span className='fw-bold'>Email: </span>{contact.email}
          </p>
          <p className='card-text small-text'>
            <span className='fw-bold'>Phone: </span>{contact.phoneNumber}
          </p>
          <p className='card-text small-text'>
            <span className='fw-bold'>Address: </span>{contact.address}
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Contact;
