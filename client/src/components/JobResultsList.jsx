import React, { useState } from 'react';

const JobResultsList = ({ jobs }) => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (jobId) => {
        setFavorites(prev => ({ ...prev, [jobId]: !prev[jobId] }));
    };

    return (
        <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', flexWrap: 'wrap' }}>
            {jobs.map(job => (
                <div key={job.id} style={{ 
                    border: '1px solid lightgray', 
                    backgroundColor: 'white', 
                    borderRadius: '5px', 
                    margin: '10px', 
                    padding: window.innerWidth < 768 ? '10px' : '15px', 
                    flex: '1 0 30%', // Adjust for responsive sizing
                    position: 'relative'
                }}>
                    <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>{job.title}</h3>
                    <p style={{ fontSize: '12px' }}>{job.company} - {job.location}</p>
                    <p>{job.description}</p>
                    <button 
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgreen'} 
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'} 
                        style={{ 
                            color: 'white', 
                            backgroundColor: 'blue', 
                            border: 'none', 
                            borderRadius: '5px', 
                            padding: '10px',
                            cursor: 'pointer' 
                        }} 
                        aria-label="Apply for this job" 
                        title="Click to apply">
                        Apply
                    </button>
                    <span 
                        onClick={() => toggleFavorite(job.id)} 
                        style={{ 
                            cursor: 'pointer', 
                            position: 'absolute', 
                            top: '10px', 
                            right: '10px' 
                        }}>
                        {favorites[job.id] ? '⭐' : '☆'}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default JobResultsList;