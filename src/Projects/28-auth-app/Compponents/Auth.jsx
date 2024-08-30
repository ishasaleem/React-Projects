import React,{useContext} from 'react'
import Buttons from "../../../Components/Buttons"
import Alert from "../../../Components/Alert"
import { AuthContext } from '../context/AuthContext'
function Auth() {
    const auth=useContext(AuthContext);
    console.log(auth)
  return (
    <div>
        {auth.status===null?(
            ""
        ):auth.status===true?
        (
        <Alert typealert={"Success"}message={"success"}/>
        ):null}

        {auth.status===null?(
        <Buttons onClick={auth.login} btnclass={"btn-orange btn-clock"}text={"Login"}/>
    ):auth.status===true?(
        <Buttons onClick={auth.logout} btnclass={"btn-danger"}text={"Logout"}/>
    ):(
          <Buttons onClick={auth.login} btnclass={"btn-info"} text={"Try again"}/>)}
        </div>
  )
}

export default Auth