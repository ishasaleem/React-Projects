import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaUserAlt } from "react-icons/fa";

export const ContactStyle = styled.li`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
  max-width: 700px;
  margin: auto;
  padding: 0.2rem 0.4rem;
  border-bottom: 1px solid #666;
  &:hover{
    cursor: pointer;
    background-color: #666;

  }
  img{
    height: 50px;
    border-radius: 50% ;
  }
 .text-success{
    color:white;
 } 
`

function Contact({ icon ,firstName,lastName,phoneNr}) {
  return (
    <ContactStyle>
      <div>
        {!icon ? <FaUserAlt className='icon' /> : <img src={icon} alt="Custom Icon" />}
      </div>
      <div >{!firstName?"john":firstName}</div>
      <div >{!lastName?"john":lastName}
      </div>
      <div>
        {!phoneNr ? "000-000" : <a className='text-info' href={`tel:${phoneNr}`}>{phoneNr}
            <FaPhone className='text-success ml-1'/></a>}
      </div>  </ContactStyle>
  );
}

export default Contact;
