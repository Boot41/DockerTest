import React, { useState } from 'react';

const ApplicationHistory = () => {
    const [applications, setApplications] = useState([
        { jobTitle: 'Software Engineer', date: '2023-10-01', status: 'Applied' },
        { jobTitle: 'Product Manager', date: '2023-09-15', status: 'Interview' },
        // ... more applications
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const filteredApplications = applications.filter(app => app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div style={{ backgroundColor: darkMode ? '#1a1a1a' : '#f4f4f4', color: darkMode ? '#ffffff' : '#000000', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Application History</h1>
                <input 
                    type="text" 
                    placeholder="Search Applications" 
                    aria-label="Search applications"
                    style={{ padding: '10px', marginLeft: '10px', borderRadius: '4px', border: '1px solid #ccc' }} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </header>
            <main style={{ marginBottom: '20px' }}>
                {filteredApplications.map((app, index) => (
                    <div key={index} style={{ backgroundColor: '#eaeaea', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
                        <h2 style={{ fontSize: '16px' }}>{app.jobTitle}</h2>
                        <p style={{ fontSize: '16px' }}>Application Date: {app.date}</p>
                        <p style={{ fontSize: '16px' }}>Status: {app.status}</p>
                        <button 
                            style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}
                            aria-label={`View details for ${app.jobTitle}`}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </main>
            <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
                <span>{filteredApplications.length} Applications</span>
                <button 
                    style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
                    aria-label="Submit New Application"
                >
                    Submit New Application
                </button>
            </footer>
        </div>
    );
};

export default ApplicationHistory;