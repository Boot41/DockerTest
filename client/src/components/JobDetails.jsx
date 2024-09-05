import React, { useState } from 'react';

const JobDetails = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleApplyNow = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid lightgray',
            borderRadius: '8px',
            padding: '15px',
            maxWidth: '600px',
            margin: 'auto',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s'
        }}>
            <h1 style={{
                fontSize: '22px',
                fontWeight: 'bold',
                margin: '0 0 10px'
            }}>
                Software Engineer <img src="logo.png" alt="Company Logo" style={{ width: '20px', verticalAlign: 'middle' }} />
            </h1>
            <h2 style={{ fontSize: '18px', margin: '0 0 10px' }}>Company Name</h2>
            <p style={{
                fontSize: '16px',
                margin: '0 0 10px'
            }}>
                We are looking for a Software Engineer to join our team. You will work on various technologies and contribute to various projects.
            </p>
            <h3 style={{ fontSize: '18px', margin: '10px 0 5px' }}>Qualifications</h3>
            <ul style={{ fontSize: '16px', margin: '0 0 10px', paddingLeft: '20px' }}>
                <li>Proficient in JavaScript</li>
                <li>Experience with React</li>
                <li>Strong problem-solving skills</li>
                <li>Preferred: Knowledge of TypeScript</li>
                <li>Preferred: Familiarity with Node.js</li>
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '15px'
            }}>
                <button onClick={handleApplyNow} style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s'
                }} onMouseOver={(e) => e.target.style.backgroundColor = 'darkgreen'} onMouseOut={(e) => e.target.style.backgroundColor = 'green'}>
                    Apply Now
                </button>
                <button style={{
                    backgroundColor: 'yellow',
                    color: 'black',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s'
                }} onMouseOver={(e) => e.target.style.backgroundColor = 'gold'} onMouseOut={(e) => e.target.style.backgroundColor = 'yellow'}>
                    Save Job
                </button>
            </div>
            {modalOpen && (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        width: '300px',
                        textAlign: 'center'
                    }}>
                        <h3>Application Steps</h3>
                        <p>Please submit your CV via our website.</p>
                        <button onClick={closeModal} style={{
                            backgroundColor: 'gray',
                            color: 'white',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobDetails;