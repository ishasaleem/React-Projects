import React from 'react';

function Alert({ type, text = "alert" }) {

  const styles = {
    base: {
      padding: '1rem',
      margin: '1rem 0',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      fontWeight: 400,
      color: '#fff',
      display: 'flex',
      width:'500px',
      alignItems: 'center',
    },
    success: {
      backgroundColor: '#28a745',
      border: '1px solid #28a745',
    },
    error: {
      backgroundColor: '#dc3545',
      border: '1px solid #dc3545',
    },
    info: {
      backgroundColor: '#17a2b8',
      border: '1px solid #17a2b8',
    },
    warning: {
      backgroundColor: '#ffc107',
      border: '1px solid #ffc107',
      color: '#212529', 
    },
  };

  
  const alertStyle = {
    ...styles.base,
    ...styles[type] 
  };

  return (
    <div style={alertStyle}>
    
      <div className='alert-icon' style={{ marginRight: '0.5rem' }}>
      
      </div>
      {text}
    </div>
  );
}

export default Alert;
