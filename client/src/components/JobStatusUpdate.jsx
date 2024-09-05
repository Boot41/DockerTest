import React, { useState } from 'react';

const JobStatusUpdate = ({ jobTitle }) => {
  const [status, setStatus] = useState('');
  const [comments, setComments] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleUpdate = () => {
    // Update job status functionality here
  };

  const handleCancel = () => {
    // Reset fields or close modal
    setStatus('');
    setComments('');
  };

  return (
    <div style={{
      padding: '15px',
      border: '1px solid',
      borderRadius: '8px',
      backgroundColor: isDarkMode ? '#003366' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#003366',
      maxWidth: '600px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        fontWeight: 'bold',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span>{jobTitle}</span>
        <span style={{ marginLeft: '10px' }}>🟡</span> {/* Replace with dynamic status icon */}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px'
      }}>
        <select
          value={status}
          onChange={handleStatusChange}
          style={{
            padding: '10px',
            marginBottom: '10px',
            fontSize: '14px',
          }}
          aria-label="Select job status"
        >
          <option value="">Select Status</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="in_progress">In Progress</option>
        </select>
        <textarea
          value={comments}
          onChange={handleCommentsChange}
          placeholder="Optional comments"
          style={{
            padding: '10px',
            fontSize: '14px',
            minHeight: '60px',
            resize: 'none',
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
      }}>
        <button
          onClick={handleUpdate}
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'darkgreen'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'green'}
          aria-label="Update job status"
        >
          Update Status
        </button>
        <button
          onClick={handleCancel}
          style={{
            backgroundColor: 'lightgray',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'gray'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'lightgray'}
          aria-label="Cancel status update"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default JobStatusUpdate;