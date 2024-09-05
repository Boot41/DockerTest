import React from 'react';

const JobSearchBar = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: window.innerWidth < 768 ? 'column' : 'row', 
      alignItems: 'center', 
      padding: window.innerWidth < 768 ? '5px' : '10px', 
      backgroundColor: 'white', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
      width: '100%', 
      maxWidth: '600px', 
      margin: '0 auto' 
    }}>
      <input 
        type="text" 
        placeholder="Search for jobs..." 
        aria-label="Job Search Input" 
        style={{ 
          flex: 1, 
          padding: '10px', 
          fontSize: '16px', 
          marginRight: window.innerWidth < 768 ? '0' : '10px', 
          marginBottom: window.innerWidth < 768 ? '10px' : '0', 
          borderRadius: '4px', 
          border: '1px solid #ccc' 
        }} 
      />
      <select 
        aria-label="Filter Options" 
        style={{ 
          padding: '10px', 
          fontSize: '16px', 
          marginRight: window.innerWidth < 768 ? '0' : '10px', 
          borderRadius: '4px', 
          border: '1px solid #ccc' 
        }}
      >
        <option value="">Select Filter</option>
        <option value="location">Location</option>
        <option value="job-type">Job Type</option>
        <option value="experience-level">Experience Level</option>
      </select>
      <button 
        type="button" 
        aria-label="Search Jobs" 
        style={{ 
          padding: '10px 15px', 
          fontSize: '18px', 
          backgroundColor: 'green', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer', 
          transition: 'background-color 0.3s'
        }} 
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgreen'} 
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'green'}
      >
        Search
      </button>
    </div>
  );
};

export default JobSearchBar;