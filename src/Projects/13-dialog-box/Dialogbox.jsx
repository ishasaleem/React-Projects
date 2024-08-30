import React,{useState,useEffect} from 'react'
import Buttons from '../../Components/Buttons'
import { BsFillEmojiFrownFill,BsFillEmojiSmileFill } from 'react-icons/bs'
import "./Bounce.css"
function Dialogbox(width="350") {
    const [subscription,setSubscription]=useState({
title:"Hello",
description:"would you like to subscribe",
state:"null",
justifyContent:"space-between"
    })
    const [icon,seticon]=useState(null);
    const iconstyle={
    fontSize:"90px",
    color:
    subscription.state==="Unsubscribed"?"red":"yellow"

    }
    const handleSubscribe=()=>{
        setSubscription({
        title:"Subscribed",
description:"Thank you for subscribing",
state:"subscribed",
justifyContent:"flex-d"
    })}
    const handleunSubscribe=()=>{
        setSubscription({
        title:"Sorry",
description:"to see you go",
state:"Unsubscribed",
justifyContent:"flex-end"
    })}
    useEffect(()=>{
        subscription.state==="Unsubscribed"&& seticon(<BsFillEmojiFrownFill style={iconstyle}/>)
subscription.state==="subscribed"&& seticon(<BsFillEmojiSmileFill style={iconstyle}/>)

    },[subscription.state])
    const [bounce, setBounce] = useState("");

 
    useEffect(() => {
        setTimeout(() => {
            setBounce("");
        }, 500);
    
        return () => {
            setBounce("bounce");  
        };
    }, [subscription.state]);
    
    
  return (
    <div className={  `cardd bg-light m-auto mt-4 ${bounce}`} style={{width:width,}}>
          <div className='card-body' >
            <div className='d-grid' style={{gridTemplateColumns:"2fr 1fr"
                ,textAlign:"center",alignItems:"center",justifyContent:"center"
            }}>
                <section>
                    <h2 className='card-title'>{subscription.title}</h2>
                    <h3 className='card-text'>{subscription.description}</h3>
                </section>
                <div>{icon}

                </div>
                </div></div>
                <hr/>
                <div className='d-flex mb-2 px-1 text-end'>
                  {subscription.state ==="null"&& ( <Buttons text={"cancel"}btnclass={"bg-light"}/>)}
                  {subscription.state ==="subscribed"?null:( <Buttons onClick={handleSubscribe} text={"Subscribe"}btnclass={"bg-danger"}/>)}
                  {subscription.state ==="subscribed"? (  <Buttons onClick={handleunSubscribe}text={"Unsubscribe"}btnclass={"bg-danger"}/>):null}</div></div>
  )
}

export default Dialogbox