import React from 'react';
import Header from './Header';
import JobSearchBar from './JobSearchBar';
import JobResultsList from './JobResultsList';
import Footer from './Footer';

const CandidateDashboard = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa', margin: 0, padding: 0 }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', padding: '10px' }}>
        <Header />
      </header>
      <main style={{ padding: '20px' }}>
        <JobSearchBar />
        <div style={{ marginTop: '20px' }}>
          <JobResultsList />
        </div>
      </main>
      <footer style={{ backgroundColor: '#343a40', color: '#ffffff', padding: '10px', textAlign: 'center' }}>
        <Footer />
      </footer>
    </div>
  );
};

export default CandidateDashboard;