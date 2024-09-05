import React from 'react';
import Header from './Header';
import Footer from './Footer';
import JobPostingForm from './JobPostingForm';
import JobListingManager from './JobListingManager';

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header className="sticky top-0 shadow-lg bg-white" />
      <main className="flex flex-col flex-grow p-4">
        <div className="mb-6">
          <JobPostingForm />
        </div>
        <div className="bg-gray-50 p-4 shadow-md">
          <JobListingManager />
        </div>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default EmployerDashboard;