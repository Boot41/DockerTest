import React from 'react';

const JobListingManager = ({ jobListings, onEdit, onDelete }) => {
  return (
    <div style={{ overflowX: 'auto', padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Job Title</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Company Name</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Location</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Posting Date</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobListings.map((job, index) => (
            <tr key={job.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f9f9f9'}>
              <td style={{ padding: '10px' }}>{job.title}</td>
              <td style={{ padding: '10px' }}>{job.company}</td>
              <td style={{ padding: '10px' }}>{job.location}</td>
              <td style={{ padding: '10px' }}>{new Date(job.postingDate).toLocaleDateString()}</td>
              <td style={{ padding: '10px' }}>
                <button aria-label={`Edit ${job.title}`} onClick={() => onEdit(job)} style={{ marginRight: '5px' }}>Edit</button>
                <button aria-label={`Delete ${job.title}`} onClick={() => { if (window.confirm('Are you sure you want to delete this job?')) onDelete(job.id); }} style={{ marginRight: '5px' }}>Delete</button>
                <button aria-label={`View details of ${job.title}`} onClick={() => {/* Navigate to details page */}}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListingManager;