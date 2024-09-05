import React, { useEffect, useState } from 'react';

const JobPostSuccessNotification = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div 
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        maxWidth: '400px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      aria-live="polite"
    >
      <h2 
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#28a745'
        }} 
        aria-label="Job Posted Successfully!"
      >
        Job Posted Successfully!
      </h2>
      <p 
        style={{
          fontSize: '16px',
          margin: '10px 0',
          textAlign: 'center'
        }}
      >
        Your job posting has been confirmed. Thank you for contributing to our community!
      </p>
      <button 
        onClick={() => {
          setIsVisible(false);
          onClose();
        }} 
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#007bff',
          cursor: 'pointer',
          padding: '8px',
          borderRadius: '5px',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'lightgray'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        aria-label="Close notification"
      >
        Close
      </button>
    </div>
  );
};

export default JobPostSuccessNotification;