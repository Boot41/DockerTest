import React from 'react';
import Header from './Header';
import AdminJobOverview from './AdminJobOverview';
import JobStatusUpdate from './JobStatusUpdate';
import ComplianceAlert from './ComplianceAlert';
import Footer from './Footer';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-navy-900 text-white">
      <Header />
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="flex-grow p-4">
          <AdminJobOverview />
          <ComplianceAlert />
        </div>
        <div className="flex-grow p-4">
          <JobStatusUpdate />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;