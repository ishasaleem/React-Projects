import React, { useEffect, useState } from 'react';
import Buttons from '../../../Components/Buttons';
import { CurrencyContext } from '../Context/Currencies-context';
function Course({ course }) {
 const currency=React.useContext(CurrencyContext);
    const { title, img, price } = course;
const contextPrice=new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:currency.code,
}).format(price*currency.conversionRate)
  // Debugging to ensure data is passed correctly
  console.log(course);

  const [courseBg,setCourseBg]=useState();
  useEffect(()=>{
if(currency.code==="USD"){
    setCourseBg("card-light")
}
if(currency.code==="EUR"){
    setCourseBg("bg-danger")
}
if(currency.code==="USD"){
    setCourseBg("btn-info")
}
  },[currency.code])
  return (
    <li className={`card ${courseBg}mb-2 style={{ width: "250px" }}`}>
      <div className="cardiyy-header">{title}</div>
      <img src={img} alt={title} style={{ width: "150px", height: "auto" }} />

      <p className="carrd-body">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, eum totam. Maiores obcaecati facere dolorum et officia quod voluptatibus rem ipsam non recusandae ullam, quibusdam aut ea dolor veniam in!
      </p>
      <div className="card-footeer d-flex">
        <h4>Price: {contextPrice }</h4>
        <Buttons text="Buy" btnclass="btn-info" />
      </div>
    </li>
  );
}

export default Course;
