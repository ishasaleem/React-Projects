import React, { useEffect, useRef, useState } from 'react';
import Title from '../../Components/Title';
import ExpensesForn from './Componentss/ExpensesForn';
import ExpensesList from './Componentss/ExpensesList';
import { BudgetStyle } from './Componentss/Styless/BudgetStyle';
import { v4 as uuidV4 } from 'uuid';
import Alert from './Componentss/Alert';
function ExpensesCalcApp() {
  const initialExpenses = localStorage.getItem("expenses") 
    ? JSON.parse(localStorage.getItem("expenses")) 
    : [];
  
  const [expenses, setExpenses] = useState(initialExpenses);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState("");
  const [budget, setBudget] = useState("");
  const [id, setID] = useState(0);
  const [edit, setEdit] = useState(false);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const changeBudget = (e) => {
    setBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== "" && charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, date, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "Expense edited" });
      } else {
        const singleExpense = { id: uuidV4(), date, charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Expense added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "error", text: "Please provide valid inputs" });
    }
  };
  let inputBudget = useRef(null);

  useEffect(() => {
    if (inputBudget.current) {
      inputBudget.current.value === "" && inputBudget.current.focus();
    }
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const clearAllExpenses = () => {
    setExpenses([]);
    // todo: alert
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete expense?")) {
      let filteredExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(filteredExpenses);
      // todo: alert
    }
  };

  const handleEdit = (id) => {
    const editExpense = expenses.find((expense) => expense.id === id);
    const { charge, amount } = editExpense;
    setCharge(charge);
    setAmount(amount);
    setID(id);
    setEdit(true);
  };

  function CalcEconomies(budget, expenses) {
    const totalExpenses = expenses.reduce((total, expense) => {
      return total + parseInt(expense.amount, 10);
    }, 0);

    return budget - totalExpenses;
  }
const[alert,SetAlert]=useState({
  show:false
})
const handleAlert=({type,text})=>{
  SetAlert({show:true,type,text})
setTimeout(()=>{
  SetAlert({show:false});
},3000)

}
  return (
    <main className='container'>
      <Title text={"Expenses Calculator"} />
      {alert.show&&<Alert type={alert.type}/>}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "25px", margin: "1rem" }}>
        <aside>
          <ExpensesForn 
            date={date} 
            charge={charge} 
            amount={amount} 
            handleDate={handleDate} 
            handleSubmit={handleSubmit}
            handleCharge={handleCharge} 
            edit={edit}
            handleAmount={handleAmount} 
          />
          <section className='card mt-2 text-right bt-primary text-align'>
            <div className='card-body'>
              <BudgetStyle>
                <h3>Budget:$</h3>
                <input 
                  type='number' 
                  value={budget} 
                  onChange={changeBudget} 
                  ref={inputBudget} 
                />
              </BudgetStyle>
              <h3 className='mb-1'>Total expenses: ${expenses.reduce((total, expense) => total + parseInt(expense.amount, 10), 0)}</h3>
              <h3>Economies: ${CalcEconomies(budget, expenses)}</h3>
            </div>
          </section>
        </aside>
        <section> 
          <ExpensesList 
            expenses={expenses}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleClearAllExpenses={clearAllExpenses} 
          />
        </section>
      </section>
    </main>
  );
}

export default ExpensesCalcApp;
