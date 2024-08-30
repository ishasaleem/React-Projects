import React from 'react';
import { MdDelete } from 'react-icons/md';
import ExpenseItem from './ExpenseItem';

function ExpensesList({handleClearAllExpenses, expenses, clearItems, handleDelete, handleEdit }) {
  return (
    <>
      <ul className='list'>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <ExpenseItem 
              key={expense.id} 
              expense={expense} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
             
            />
          ))
        ) : (
          <p>No expenses to display</p>
        )}
      </ul>
      {expenses.length > 0 && (
        <button className='btn btn-danger' onClick={handleClearAllExpenses}>
          <MdDelete /> Clear All Expenses
        </button>
      )}
    </>
  );
}

export default ExpensesList;
