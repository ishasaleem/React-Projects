import React ,{useContext}from 'react'
import Title from '../../Components/Title'
import Buttons from '../../Components/Buttons'
import { themecontext ,themes} from './Context/Theme-context';

function Blog() 
 {
    const {theme,changeTheme}=useContext(themecontext);
  return (
    <div className='container p-1'>
        <Title text={`My Blog with ${theme} theme`}/>
        <span style={{position:"absolute",top:1,right:10}}>
            <Buttons text={theme==="dark"?"light":"dark"}btnclass={`${theme==="dark"&&"btn-light"}btn-small`}onClick={changeTheme } />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, et error quidem odit deleniti corporis quia, quas enim obcaecati architecto ducimus placeat repellat 
                ad quae inventore blanditiis, incidunt omnis tempore.</p>
        </span>
    </div>
  )
}

export default Blog