import React, { useState } from 'react';

const ApplicationNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, applicant: 'John Doe', jobTitle: 'Software Engineer', time: '2 hours ago' },
    { id: 2, applicant: 'Jane Smith', jobTitle: 'Product Manager', time: '3 hours ago' },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleView = (id) => {
    // Handle view logic
    console.log(`Viewing notification ${id}`);
  };

  const handleDismiss = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div style={{ 
      background: '#ffffff', 
      color: '#000000', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      padding: '15px', 
      maxWidth: '400px', 
      margin: 'auto', 
      overflow: 'hidden' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Job Application Notifications</h2>
        <button 
          onClick={toggleDropdown} 
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} 
          aria-haspopup="true" 
          aria-expanded={isDropdownOpen}
        >
          ⚙️
        </button>
        {isDropdownOpen && (
          <div style={{ position: 'absolute', background: '#ffffff', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1 }}>
            <button style={{ padding: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f0f0f0'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>Mute Notifications</button>
            <button style={{ padding: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f0f0f0'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>Refresh</button>
            <button style={{ padding: '10px', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.background = '#f0f0f0'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>Manage Preferences</button>
          </div>
        )}
      </div>
      <div style={{ marginTop: '10px' }}>
        {notifications.map(notification => (
          <div key={notification.id} style={{ border: '1px solid #e0e0e0', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
            <p style={{ fontSize: '16px', margin: '0' }}>{notification.applicant} applied for {notification.jobTitle}</p>
            <p style={{ fontSize: '14px', color: '#888888', margin: '5px 0' }}>{notification.time}</p>
            <button 
              style={{ background: '#007bff', color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '5px' }} 
              onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'} 
              onMouseOut={(e) => e.currentTarget.style.background = '#007bff'}
              onClick={() => handleView(notification.id)}
            >
              View
            </button>
            <button 
              style={{ background: '#ff4c4c', color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
              onMouseOver={(e) => e.currentTarget.style.background = '#e63939'} 
              onMouseOut={(e) => e.currentTarget.style.background = '#ff4c4c'}
              onClick={() => handleDismiss(notification.id)}
            >
              Dismiss
            </button>
          </div>
        ))}
      </div>
      <button 
        onClick={handleClearAll} 
        style={{ background: '#cccccc', color: '#000000', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }} 
      >
        Clear All
      </button>
    </div>
  );
};

export default ApplicationNotifications;