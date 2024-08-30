// ExpenseItem.js

import React from 'react';

import { MdDelete, MdEdit } from 'react-icons/md';
import { ExpenseItemStyle } from './Styless/ExpenseItemStyle';

function ExpenseItem({ expense, handleDelete, handleEdit }) {
  const { id, charge, Amount, date } = expense;

  return (
    <ExpenseItemStyle>
      <div className='expense-details'>
        <div className='d-flex flex-column' style={{ alignItems: 'flex-start' }}>
          <h4 className='text-primary'>{charge}</h4>
          <small className='text-danger'>{date}</small>
        </div>
        <div className='text-success'>${Amount}</div>
        <div>
          <button 
            className='btn btn-sm' 
            onClick={() => handleEdit(id)} 
            aria-label='Edit Expense'
          >
            <MdEdit />
          </button>
          <button 
            className='btn btn-sm' 
            onClick={() => handleDelete(id)} 
            aria-label='Delete Expense'
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </ExpenseItemStyle>
  );
}



export default ExpenseItem;
