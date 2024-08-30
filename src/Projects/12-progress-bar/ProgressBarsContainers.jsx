import React,{useRef,useEffect,useState} from 'react'
import Title from '../../Components/Title'
import ProgressBars from '../../Components/ProgressBars';

function ProgressBarsContainers() {
    const inputstyle={
        width:50,
        outline:"none",
        border:"none",
        borderBottom:"1px solid lightgray",
        textAlign:"center",
    }
    const uiinput=useRef(null);
    const[complete,setComplete]=useState(56);
    const[status,setStatus]=useState({
        ui:70,
        ux:38,
        data:80

    });
    const ProjectDate=[{
        bgcolor:"red",completed:status.ui},
    {bgcolor:"purple",completed:status.ux},
    {bgcolor:"pink",completed:status.data}];
useEffect(()=>{
uiinput.current.focus( );
setInterval(() => {
setComplete(Math.floor(Math.random()*100)+1);
}, 2000);
},[])
  return (
    <div className='container text-center m-auto'>
        <Title text={"Progress bars"}/>
        <h2>Project Status</h2>
        <ul>
            <li>
              UI status  <input type='number' ref={uiinput} style={inputstyle} value={status.ui} onChange={(e)=>setStatus({...status, ui:e.target.value})}/>
            </li>
        </ul>
        <ul>
            <li>
              UX status  <input type='number' style={inputstyle} value={status.ux} onChange={(e)=>setStatus({...status, ux:e.target.value})}/>
            </li>
        </ul>
        Data status  <input type='number' style={inputstyle} value={status.data} onChange={(e)=>setStatus({...status, data:e.target.value})}/>
{ProjectDate.map((date,idx)=>(
    <ProgressBars key={idx} bgcolor={date.bgcolor}completed={date.completed}/>
))}

<ProgressBars  bgcolor={complete>40?"red":"pink"}completed={complete}/>

     </div>
  );
}

export default ProgressBarsContainers