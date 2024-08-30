import React from 'react';
import { NewTaskStyle } from './TableStyle';
import Buttons from '../../Components/Buttons';
import {RiDeleteBin6Fill} from "react-icons/ri"
function NewTask({ type, date ,onDelete,onTaskClick}) {
  return (
    <NewTaskStyle onClick={onTaskClick}>
      <div>
        <h3>{type}</h3>
        <small className="text-warning">{date}</small>
      </div>
   <Buttons btnclass={"btn-info"}text={""} icon={<RiDeleteBin6Fill className='btn-info'style={{fontSize:"2rem",userSelect:"none",pointerEvents:"none"}} />} onClick={onDelete}/>

    </NewTaskStyle>
  );
}

export default NewTask;
