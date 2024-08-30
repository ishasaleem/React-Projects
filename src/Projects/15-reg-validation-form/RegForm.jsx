import React, { useEffect, useRef, useState } from 'react'
import Buttons from '../../Components/Buttons'
import Title from '../../Components/Title'
import Alert from '../../Components/Alert'

function RegForm() {
    const [submit, setSubmit] = useState(false);
    const [valid, setValid] = useState(false);
    let inputName = useRef(null);
    let inputEmail = useRef(null);
    let inputPassword = useRef(null);

    useEffect(() => {
        inputName.current.focus();
    }, [])

    const [values, setValues] = useState({
        user_name: "",
        email: "",
        password: ""
    })

    const handleNameChange = (e) => {
        let Namee = e.target.value;
        setValues({ ...values, user_name: Namee })
    }

    const handleEmailChange = (e) => {
        let emaill = e.target.value;
        setValues({ ...values, email: emaill })
    }

    const handlePasswordChange = (e) => {
        let pass = e.target.value;
        setValues({ ...values, password: pass })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.user_name) {
            inputName.current.focus();
        }
        else if (!values.email) {
            inputEmail.current.focus();
        }
        else {
            inputPassword.current.focus();
        }
        setSubmit(true);
        if (values.user_name && values.email && values.password) {
            setValid(true);
        }
    }

    return (
        <div className='m-auto text-center'>
            {(submit && valid) ? <>
                <Alert delay={true} delayTime={5000} message={"Registered Successfully"} type={"success"} />
                <Title text={"Welcome"} />
            </> : (
                <div className='container m-auto mt-4 p-2 shadow-sm border-5'>
                    <Title text={"Registration Form"} />
                    <form>
                        <div className='form-group'>
                            <input type='text' placeholder='Enter your name' ref={inputName} value={values.user_name} onChange={handleNameChange} />
                            {submit && !values.user_name ? <label className='text-danger fs-sm'>Please Enter your name</label> : null}
                        </div>
                        <div className='form-group'>
                            <input type='text' placeholder='Enter your email' ref={inputEmail} value={values.email} onChange={handleEmailChange} />
                            {submit && !values.email ? <label className='text-danger fs-sm'>Please Enter your Email</label> : null}
                        </div>
                        <div className='form-group'>
                            <input type='text' placeholder='Enter your password' ref={inputPassword} value={values.password} onChange={handlePasswordChange} />
                            {submit && !values.password ? <label className='text-danger fs-sm'>Please Enter your password</label> : null}
                        </div>
                        <Buttons btnclass={'btn-primary'} text={"Register"} onClick={handleSubmit} />
                    </form>
                </div>
            )}
        </div>
    )
}

export default RegForm;
