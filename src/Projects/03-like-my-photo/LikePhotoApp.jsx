import React ,{useState}from 'react'
import Title from '../../Components/Title'
import { CiFaceSmile} from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import image from "./img/image.jpg"
function LikePhotoApp() {
  
  const [like,setlike]=useState(false);
  const[count,setcount]=useState(0);
  const toggleLike=()=>
  {
    if(!like){
      setlike(true);
    setcount(count+1);}
      else{
setlike(false);
setcount(count-1);
      }
    }
  

  return (
   
    <div className='like-photo-container' style={{textAlign:"center"}}>
<Title text="Like Photo App" classes="main"/>
<Title text={`likes ${count}`} classes="sub"/>
<div className='card card-dark m-auto' style={{alignContent:"center",width:"33%", cursor:'pointer'}}>
  
  <div className='card-header fx-xl'style={{height:"70px"}}>
  <CiFaceSmile />
    <small>doggydog</small></div>
  <div  className="image"> <img src={image}alt='img'onDoubleClick={toggleLike} style={{height:"800px",width:"620px"}}/></div> 

<div className='card-footer m-auto'onDoubleClick={toggleLike}style={{height:"70px"}}>
<div className='outer-container'>
<div className='heart-icon'>

{like ? <AiFillHeart className="text-danger"  onClick={toggleLike}/> : <AiOutlineHeart onClick={toggleLike}/>}
</div>
</div>
  <FaRegComments className='commnet'/> 
</div>

</div>

    </div>
  )
}

export default LikePhotoApp