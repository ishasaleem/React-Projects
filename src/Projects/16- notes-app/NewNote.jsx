import React, { useEffect, useState } from 'react'
import { Notestyle,Icons, DeleteIcons } from './Notestyle'
import{MdOutlineNoteAlt,MdDeleteForever} from "react-icons/md"
function NewNote({note,onClick,text,cardBg} ) {
    const [newcardBg,setnewCardbg]=useState();
useEffect(()=>{
    !newcardBg&&setnewCardbg(cardBg);
},[newcardBg])
  return (
    <Notestyle className={`cardi ${newcardBg}`}>
        <div className='cardi-header text-right'>
      <Icons>  <MdOutlineNoteAlt/>
        
        <DeleteIcons><MdDeleteForever onClick={()=>onClick(note.id)}/>
        </DeleteIcons></Icons>
        </div>
     
        <div className='cardi-body '>
            <textarea style={{outline:"none",border:"none",width:"380px",height:"170px"}}>{text}</textarea>

        </div>
        </Notestyle>
  )
}

export default NewNote