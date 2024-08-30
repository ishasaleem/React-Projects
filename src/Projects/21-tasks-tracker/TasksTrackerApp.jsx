import React, { useState } from 'react';
import NewTask from './NewTask';
import Tasks from './Tasks';
import Title from '../../Components/Title';
import { TableStyle } from './TableStyle';

function TasksTrackerApp() {
  const [newtask, setNewTask] = useState({
    date: '',
    type: '',
    completed: '',
  });

  const handleChangeDate = (e) => {
    setNewTask({ ...newtask, date: e.target.value });
  };

  const handleChangetype = (e) => {
    setNewTask({ ...newtask, type: e.target.value });
  };

  const initialTasks = [{ date: '', type: '' }];
  const [tasklist, setTasklist] = useState(initialTasks);

  const addNewTask = () => {
    setTasklist([...tasklist, { date: newtask.date, type: newtask.type }]);
  };
const handleCompleted=(e)=>{
  e.target.classList.toggle("completed");
}
const handleDelete=(e)=>{
  window.confirm("Delete this task?") &&e.target.parentElement.remove();
}
  return (
    <div>
      <Title text="Task Tracker" classes="main" />
      <TableStyle>
        <ul className="table-head">
          <li>Date</li>
          <li>Task</li>
        </ul>
        <Tasks
          type={newtask.type}
          onClick={addNewTask}
          setType={handleChangetype}
          date={newtask.date}
          setDate={handleChangeDate}
        />
        <ul className="table-row">
          {tasklist.map((tas, index) =>
            tas.date !== '' && tas.type !== '' ? (
              <NewTask key={index} date={tas.date} type={tas.type}onTaskClick={handleCompleted} onDelete={handleDelete }/>
            ) : null
          )}
        </ul>
      </TableStyle>
    </div>
  );
}

export default TasksTrackerApp;
