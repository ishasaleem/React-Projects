import React from 'react'
import Buttons from '../../../Components/Buttons'
import  FormGroup from '../../../Components/FormGroup'
import{MdEdit,MdAddCircle} from"react-icons/md"
function ExpensesForn({edit,handleAmount,amount,handleDate,charge,handleCharge,handleSubmit,date}) {
  return (
    <form onSubmit={handleSubmit}className='card bg-primary'>
     <div className='card-body'>
        <FormGroup labelText={"Data"}inputType={"date"} values={date} Onchange={handleDate}/>
        <FormGroup labelText={"Expense"}inputType={"text"} values={charge} Onchange={handleCharge}placeholder={"e.g rent/credit card"}/>
        <FormGroup labelText={"Amount"}inputType={"number"} values={amount} Onchange={handleAmount}placeholder={"e.g 1500"}/>
    {edit?(<Buttons btnclass={"btn-info"}icon={<MdEdit className='btn-edit'/>} text={"Edit"}/>):<Buttons btnclass={"btn-warning"} icon={<MdAddCircle className="btn-icon"/>} text={"Add"}/>}</div>
    </form>
  )
}

export default ExpensesForn