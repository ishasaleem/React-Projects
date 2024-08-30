import React ,{useEffect, useState}from 'react'
import Title from '../../Components/Title'
import Buttons from '../../Components/Buttons'
import { FaRegUser } from "react-icons/fa";
import { BsFilePostFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";

function TestimonialApp() {
   /* const handleClick=()=>
    {
        console.log("ive been clicked")
    }*/
   const [testimonials,settestimonials]=useState();
   const [items,setItems]=useState();


   useEffect(() => {
    if (testimonials) {
       fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
          .then((response) => response.json())
          .then((json) => setItems(json))
          .catch((error) => console.error('Error fetching data:', error));
    }
 }, [testimonials]);

  return (

    <div>
        <Title text="Testimonial App"/>
        <div className='mainn'>
        <Buttons text={"posts"} btnclass={"btn-info"} onClick={()=>settestimonials("posts")}icon={<BsFilePostFill/>} />
        <Buttons text={"Users"} btnclass={"btn-users"}onClick={()=>settestimonials("users")}icon={<FaRegUser />} />
        <Buttons text={"Comments"} btnclass={"btn-comments"} onClick={()=>settestimonials("comments")}icon={<AiOutlineComment />}/></div>
        <Title text={!testimonials?"select from above":testimonials}classes={"main"}/>
        {!items? null:items.map((item)=>{
            return<div className="card"key={item.id}>{item.name&&<h2>{item.name}</h2>}
           
       <h4> {item.title}</h4>
       <p> {item.body}</p>
       </div>
     
})  }
    </div>
  );
}

export default TestimonialApp