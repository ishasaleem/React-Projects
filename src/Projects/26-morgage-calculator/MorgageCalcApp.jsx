import React, { useState } from 'react'
import Title from '../../Components/Title'
import FormGroup from '../../Components/FormGroup'
import Buttons from '../../Components/Buttons'

function MorgageCalcApp() {
   
    //states
    const[homeValue,setHomeValue]=useState("")
    const[downPayment,setDownPayment]=useState("")
    const [loanAmount,setLOanAmount]=useState("")
    const[interestRate,setInterestRate]=useState("")
    const[loanDuration,setLoanDuration]=useState('')
    const[mmonthlyPayments,setMonthlyPayments]=useState("")
const CalculateLoanAmount=()=>{
    setLOanAmount(homeValue-downPayment);
    return loanAmount


}
function calculateMonthlyPayment(){
    function percentageToDecimal(percent){
        return percent/12/100;
    }
    function yearToMonths(years){
        return years*12;
    }
    setMonthlyPayments(
        (percentageToDecimal(interestRate) * loanAmount) /
        (1 - Math.pow(1 + percentageToDecimal(interestRate), -yearToMonths(loanDuration)))
      )
    return mmonthlyPayments};
      
    let alertclass;
    
    mmonthlyPayments?(alertclass="alert-orange"):alertclass="alert-danger"
    return (
    <div className='container mt-4 carddd'style={{width:500}}>
        <Title text={"MorgageCalcApp"}/>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className='d-grid'style={{gridTemplateColumns:"1fr 1fr",gap:10}}>
             <FormGroup 
             onKeyUp={CalculateLoanAmount}
             values={homeValue}
             onInput={(e)=>setHomeValue(e.target.value)}
                labelText={"Home Value"} 
                inputType={"number"}
                placeholder={"Enter the value of the home"}/>
            <FormGroup 
onInput={(e)=>setDownPayment(e.target.value)}
onKeyUp={CalculateLoanAmount}
            values={downPayment}
              labelText={"Down Payment"} 
              inputType={"number"}
              placeholder={"Enter your funds"}/>
                    </div>

                    <FormGroup 
                    readOnly={true}
              labelText={"Loan Amount"} 
              className={"bg-light"}
              values={loanAmount}
              inputType={"number"}
              placeholder={"The calculated amount of loan"}/>
               <FormGroup 
               values={interestRate}
              labelText={"Interest Rate %"} 
              inputType={"number"}
              onInput={(e)=>setInterestRate(e.target.value)}
              placeholder={"Enter your interest rate"}/>
                   <div className='d-grid'style={{gridTemplateColumns:"1fr 1fr",gap:10}}>
             <FormGroup 
             values={loanDuration}
             onInput={(e)=>setLoanDuration(e.target.value)}
                labelText={"Loan Duration"} 
                inputType={"number"}
                placeholder={"Enter the duration of your loan in years"}/>
           </div>
           <Buttons onClick={calculateMonthlyPayment}btnclass={"success-btn"} text={"Calculate"}/>
    <h4 className={`${(alertclass = "alert-orange")}`} style={{ color: "white", backgroundColor: "orange", padding: "10px" }}>
{mmonthlyPayments?`Monthly payments:${mmonthlyPayments.toFixed(2)}`:"Complete all fields"}  
</h4>
</form></div>
  )
}

export default MorgageCalcApp