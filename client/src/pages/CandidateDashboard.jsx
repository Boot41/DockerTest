import React from 'react';
import Header from './Header';
import JobSearchBar from './JobSearchBar';
import ApplicationHistory from './ApplicationHistory';
import Footer from './Footer';

const CandidateDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }} />
      
      <main style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <JobSearchBar style={{ backgroundColor: '#e0f7fa', width: '100%', marginBottom: '20px', padding: '10px', borderRadius: '5px' }} />
        <ApplicationHistory style={{ width: '100%', border: '1px solid lightgray', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '20px' }} />
      </main>

      <Footer style={{ width: '100%', backgroundColor: '#f1f1f1', padding: '10px', textAlign: 'center' }} />
    </div>
  );
};

export default CandidateDashboard;