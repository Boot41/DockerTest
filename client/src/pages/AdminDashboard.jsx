import React from 'react';
import Header from './Header';
import AdminJobOverview from './AdminJobOverview';
import JobStatusUpdate from './JobStatusUpdate';
import ComplianceAlert from './ComplianceAlert';

const AdminDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1, padding: '1rem', boxSizing: 'border-box' }}>
                <div style={{ width: '20%', padding: '1rem', borderRight: '1px solid #e2e2e2' }}>
                    <AdminJobOverview />
                </div>
                <div style={{ width: '60%', padding: '1rem', borderRight: '1px solid #e2e2e2' }}>
                    <JobStatusUpdate />
                </div>
                <div style={{ width: '20%', padding: '1rem' }}>
                    <ComplianceAlert />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;