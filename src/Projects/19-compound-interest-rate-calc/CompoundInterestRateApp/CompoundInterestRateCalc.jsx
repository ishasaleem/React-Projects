import React from 'react'

function CompoundInterestRateCalc({principleAmount,interestRate,years,monthlyContribution}) {
  //A=P(1+r/n)^nt
  const A={
    P:principleAmount,
    r:interestRate/100,
    PMT:monthlyContribution,
    n:12,
t:years,

  }
  document.body.style.background="pink";
    return (
    <div>
     {A.PMT===null?   (A.P*Math.pow(1+ A.r /A.n ,A.n*A.t)).toFixed(2):
     (
      A.P*Math.pow(1+ A.r /A.n ,A.n*A.t)+
      (A.PMT* (Math.pow(1+ A.r /A.n ,A.n*A.t)-1))/(A.r/A.n)).toFixed(2)} 
    
    </div>
  )
}

export default CompoundInterestRateCalc