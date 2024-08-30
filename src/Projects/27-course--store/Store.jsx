import React, { useState } from 'react';
import { CurrenciesDb } from './db/CurrenciesDb';
import Courses from './componennts/Courses';
import Buttons from "../../Components/Buttons";
import { Coursesdb } from './db/Coursesdb';
import { CurrencyContext } from './Context/Currencies-context';
{/*document.body.style.backgroundColor = "#282c34";
document.body.style.color = "#eee";*/}

function Store() {
  const [currency, setCurrency] = useState(CurrenciesDb.Euro);

  return (
  
    <CurrencyContext.Provider value={currency}>
    <div className='container p-1'>
      <h4 className='mb-2'>Change Currency</h4>
      {Object.values(CurrenciesDb).map((cur) => (
        <Buttons 
          key={cur.label} 
          text={cur.code} 
          onClick={() => setCurrency(cur)} // Wrap setCurrency in an arrow function
          btnclass={"btn-info"}
        />
      ))}
      <header className='text-center my-4'>
        <h1 className='title fs-xl'>Course</h1>
        <h2 className='text-uppercase fs-xl'>Become a web developer</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, atque totam. 
          Iusto nostrum magnam repudiandae assumenda. Aspernatur reprehenderit fuga tempore 
          suscipit velit, numquam eveniet quis ducimus, labore hic omnis aliquam.
        </p>
      </header>
      <Courses list={Coursesdb} />
    </div>
    </CurrencyContext.Provider>
    );
  
}


export default Store;
