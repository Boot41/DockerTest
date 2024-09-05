import React, { useState } from 'react';

const JobPostingForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [employmentType, setEmploymentType] = useState('full-time');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [remoteWork, setRemoteWork] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!jobTitle) errors.jobTitle = 'Job title is required';
        if (!jobDescription) errors.jobDescription = 'Job description is required';
        if (!location) errors.location = 'Location is required';
        if (!salary) errors.salary = 'Salary is required';
        if (!/^\d+(\.\d{1,2})?$/.test(salary)) errors.salary = 'Salary must be a valid number';
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // handle form submission
            console.log('Form submitted:', { jobTitle, jobDescription, employmentType, location, salary, remoteWork });
        }
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{
                background: 'white',
                borderRadius: '10px',
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                margin: '10px',
                maxWidth: '600px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Job Posting Form</h2>
            <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Job Title:</label>
            <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                style={{ fontSize: '14px', marginBottom: '10px', padding: '8px' }}
                aria-label="Job Title"
            />
            {formErrors.jobTitle && <span style={{ color: 'red' }}>{formErrors.jobTitle}</span>}
            
            <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Job Description:</label>
            <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                style={{ fontSize: '14px', marginBottom: '10px', padding: '8px' }}
                aria-label="Job Description"
            />
            {formErrors.jobDescription && <span style={{ color: 'red' }}>{formErrors.jobDescription}</span>}

            <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Employment Type:</label>
            <select
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                style={{ fontSize: '14px', marginBottom: '10px', padding: '8px' }}
                aria-label="Employment Type"
            >
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
            </select>

            <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Location:</label>
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ fontSize: '14px', marginBottom: '10px', padding: '8px' }}
                aria-label="Location"
            />
            {formErrors.location && <span style={{ color: 'red' }}>{formErrors.location}</span>}

            <label style={{ fontWeight: 'bold', fontSize: '16px' }}>Salary:</label>
            <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                style={{ fontSize: '14px', marginBottom: '10px', padding: '8px' }}
                aria-label="Salary"
                title="Enter a valid number (e.g., 50000 or 50000.00)"
            />
            {formErrors.salary && <span style={{ color: 'red' }}>{formErrors.salary}</span>}

            <label style={{ fontWeight: 'bold', fontSize: '16px' }}>
                <input 
                    type="checkbox" 
                    checked={remoteWork} 
                    onChange={() => setRemoteWork(!remoteWork)} 
                    style={{ marginRight: '5px' }} 
                    aria-label="Remote Work Option" 
                />
                Remote Work Available
            </label>

            <button 
                type="submit" 
                style={{ 
                    backgroundColor: '#007BFF', 
                    color: 'white', 
                    padding: '10px', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    marginTop: '15px' 
                }} 
                disabled={!jobTitle || !jobDescription || !location || !salary || Object.keys(formErrors).length > 0}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
                aria-label="Submit Job Posting"
            >
                Submit
            </button>
        </form>
    );
};

export default JobPostingForm;