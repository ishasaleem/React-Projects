  import React, { useState ,useRef,useEffect} from 'react'
import FormGroup from '../../Components/FormGroup'
import Title from '../../Components/Title'
import { Wrapper } from './Compponents/Wrapper.style'
import Auth from './Compponents/Auth'
import { AuthContext } from './context/AuthContext'
function AuthApp() {
    const[ui,setUi]=useState({
        wrapper:true,
        title:"Authenticate"
    })
    const[animateDenied,setAnimateDenied]=useState(false)
 
 const inputName=useRef(null)
 
 const [userAuth,setUserAuth]=useState({
  name:"",
  password:""
 })
 const handleChangeName=(e)=>{
  setUserAuth({...userAuth,name:e.target.value})
 };
 const handleChangePassword=(e)=>{
  setUserAuth({...userAuth,password:e.target.value})
 };
 useEffect(()=>{
  inputName.current.focus();
 },[])

 const [authStatus,setAuthStatus]=useState(null);
 const login=()=>{
  if(userAuth.name==="Isha"&&userAuth.password==="1234"){
    setAuthStatus(true);
    clearInputs();
    Authentice();
  }
  else{
    setAuthStatus(false);
    setAnimateDenied(true);
    setTimeout(() => {
      setAnimateDenied(false)
    }, 600 );
  }
  
 }
 function clearInputs(){
  setUserAuth({
    name:"",
    password:""
  })
 }
 function  Authentice(){
  setUi({wrapper:false,title:`welcome${userAuth.name}`})
 }
 const logout=()=> {
  window.location.reload(true)
 }
    return (

    
    <div className='container 'style={{width:"300"}}>
      <Title/>{ui.title}
<AuthContext.Provider value={{status:authStatus,login:login,logout:logout}}>
        {ui.wrapper&& 
        
        (
            <Wrapper className={animateDenied&&"active"}> <FormGroup labelText={"user name"}
        inputType={"text"}

        placeholder={"enter your name"}
        reference={inputName}
        values={userAuth.name}
        Onchange={handleChangeName}/>

        <FormGroup labelText={"password"}
        inputType={"password"}
        placeholder={"enter your password"}
        values={userAuth.password}
        Onchange={handleChangePassword}/></Wrapper> )}
        
        <Auth/>
        </AuthContext.Provider>
        </div>
        
  )
  
}

export default AuthApp