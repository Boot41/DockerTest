import React from 'react';
import Header from './Header';
import Footer from './Footer';
import JobPostingForm from './JobPostingForm';
import JobListingManager from './JobListingManager';
import ApplicationNotifications from './ApplicationNotifications';

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex flex-1">
        <div className="w-1/4 bg-gray-200 p-4">
          <JobPostingForm />
        </div>
        <div className="w-3/4 p-4">
          <JobListingManager />
          <ApplicationNotifications />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerDashboard;