import React, { useState } from 'react';

const AdminJobOverview = () => {
  const [jobPostings, setJobPostings] = useState([]);
  
  const handleRefresh = () => {
    // Logic to fetch and set job postings
  };

  const handleEdit = (job) => {
    // Logic to open edit modal for the job
  };

  const handleDelete = (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      // Logic to delete the job posting
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px' }}>Job Postings</h1>
        <button onClick={handleRefresh} aria-label="Refresh job postings" style={{ padding: '10px 15px', cursor: 'pointer' }}>Refresh</button>
      </header>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ fontWeight: 'bold', fontSize: '16px', padding: '15px' }}>Job Title</th>
            <th style={{ fontWeight: 'bold', fontSize: '16px', padding: '15px' }}>Company</th>
            <th style={{ fontWeight: 'bold', fontSize: '16px', padding: '15px' }}>Location</th>
            <th style={{ fontWeight: 'bold', fontSize: '16px', padding: '15px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobPostings.map((job, index) => (
            <tr key={job.id} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              <td style={{ padding: '15px', fontSize: '14px' }}>{job.title}</td>
              <td style={{ padding: '15px', fontSize: '14px' }}>{job.company}</td>
              {window.innerWidth > 768 && <td style={{ padding: '15px', fontSize: '14px' }}>{job.location}</td>}
              <td style={{ padding: '15px' }}>
                <button onClick={() => handleEdit(job)} aria-label="Edit job" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', marginRight: '5px', cursor: 'pointer', transition: '0.3s' }}>Edit</button>
                <button onClick={() => handleDelete(job.id)} aria-label="Delete job" style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', cursor: 'pointer', transition: '0.3s' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobOverview;