import React, { useState } from 'react';

const ApplicantReview = ({ jobTitle, applicants }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '15px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', padding: '15px' }}>
        {jobTitle} - {applicants.length} Applicants
      </h1>
      <div>
        {applicants.map((applicant, index) => {
          const [status, setStatus] = useState('Applied');

          return (
            <div
              key={index}
              style={{
                backgroundColor: 'lightgray',
                margin: '10px 0',
                padding: '15px',
                borderRadius: '5px',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 10px lightblue'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <img src={applicant.avatar} alt={applicant.name} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
              <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{applicant.name}</h2>
              <p style={{ fontSize: '14px' }}>{applicant.resumeSummary}</p>
              <p style={{ fontSize: '14px' }}>Skills: {applicant.skills.join(', ')}</p>
              <select
                aria-label={`Status for ${applicant.name}`}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ padding: '5px', marginRight: '10px' }}
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
                <option value="Offer">Offer</option>
              </select>
              <button
                onClick={() => alert(`Notification sent to ${applicant.name}`)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: 'white',
                  border: '1px solid gray',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'lightgreen'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                aria-label={`Send notification to ${applicant.name}`}
              >
                Send Notification
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicantReview;