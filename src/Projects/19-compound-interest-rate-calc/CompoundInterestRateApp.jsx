import React, { useEffect, useRef, useState } from 'react';
import FormGroup from '../../Components/FormGroup';
import CompoundInterestRateCalc from './CompoundInterestRateApp/CompoundInterestRateCalc';

function CompoundInterestRateApp() {
  const inputPrinciple = useRef(null);

  useEffect(() => {
    if (inputPrinciple.current) {
      inputPrinciple.current.focus();
    }
  }, []);

  const [compound, setCompound] = useState({
    principleAmount: '',
    monthlyContribution: '',
    interestRate: '',
    years: ''
  });

  return (
    <div className='containeer'>
      <div className='cardddi card-primary mt-4 m-auto' style={{ maxWidth: '300px' }}>
        CompoundInterestRateApp
      </div>
      <div className='card-bodyy'>
        <FormGroup
          labelText="Principle amount $"
          inputType="number"
          values={compound.principleAmount}
          Onchange={(e) => setCompound({ ...compound, principleAmount: e.target.value })}
          reference={inputPrinciple}
        />
        <FormGroup
          labelText="Monthly Contribution $"
          inputType="number"
          values={compound.monthlyContribution}
          Onchange={(e) => setCompound({ ...compound, monthlyContribution: e.target.value })}
        />
        <FormGroup
          labelText="Interest Rate $"
          inputType="number"
          values={compound.interestRate}
          Onchange={(e) => setCompound({ ...compound, interestRate: e.target.value })}
        />
        <FormGroup
          labelText="Years of investment $"
          inputType="number"
          values={compound.years}
          Onchange={(e) => setCompound({ ...compound, years: e.target.value })}
        />
      </div>
      <div className='card-footr'>
        <CompoundInterestRateCalc principleAmount={compound.principleAmount}interestRate={compound.interestRate}years={compound.years}monthlyContribution={compound.monthlyContribution}/></div>
    </div>
  );
}

export default CompoundInterestRateApp;
