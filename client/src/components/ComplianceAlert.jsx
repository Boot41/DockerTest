import React from 'react';

const ComplianceAlert = ({ title, message, timestamp, onResolve }) => {
  return (
    <div
      style={{
        backgroundColor: '#FFCCCC',
        border: '2px solid #B22222',
        borderRadius: '8px',
        padding: window.innerWidth < 768 ? '10px' : '15px',
        margin: '10px',
        transition: 'background-color 0.3s',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
      role="alert"
      aria-label="Compliance alert"
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <span
          aria-label="Notification icon"
          role="img"
          style={{ marginRight: '8px' }}
        >
          ⚠️
        </span>
        <strong style={{ fontSize: window.innerWidth < 768 ? '14px' : '16px' }}>
          {title}
        </strong>
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#B22222' }}>
          {timestamp}
        </span>
      </div>
      <p style={{ fontSize: '14px', marginBottom: '10px', color: '#B22222' }}>
        {message}
      </p>
      <button
        onClick={onResolve}
        style={{
          backgroundColor: '#B22222',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 12px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#8B0000')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#B22222')}
        aria-label="Resolve compliance issue"
      >
        Resolve
      </button>
    </div>
  );
};

export default ComplianceAlert;