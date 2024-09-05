import React from 'react';
import Header from './Header';
import AdminJobOverview from './AdminJobOverview';
import JobStatusUpdate from './JobStatusUpdate';
import ComplianceAlert from './ComplianceAlert';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header className="sticky top-0 z-10 shadow-md" />

      <main className="flex-grow p-4">
        <AdminJobOverview className="border border-gray-300 shadow-sm mb-4 p-4" />
        <JobStatusUpdate className="border border-gray-300 shadow-sm mb-4 p-4" />
        <ComplianceAlert className="border border-gray-300 shadow-sm mb-4 p-4" />
      </main>
    </div>
  );
};

export default AdminDashboard;