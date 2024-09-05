import React from 'react';
import Header from './Header';
import Footer from './Footer';
import JobSearchBar from './JobSearchBar';
import JobResultsList from './JobResultsList';

const JobSearchResults = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#333', color: '#fff' }} />
            <main style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9' }}>
                <JobSearchBar style={{ marginBottom: '20px' }} />
                <JobResultsList style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} />
            </main>
            <Footer style={{ width: '100%', backgroundColor: '#333', color: '#fff', padding: '10px 20px' }} />
        </div>
    );
};

export default JobSearchResults;