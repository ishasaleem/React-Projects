import React from 'react'

function FormGroup({values,reference,placeholder,labelText,inputType,onInput,onKeyUp,Onchange,className,readOnly=false}) {
  return (
    <div>
         <div className='form-group'>
            <label>{labelText}</label>
            <input type={inputType}ref={reference}placeholder={placeholder}onInput={onInput}value={values} onKeyUp={onKeyUp}onChange={Onchange}className={className}readOnly={readOnly}/>
        </div>
    </div>
  )
}

export default FormGroup