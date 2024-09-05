import React from 'react';
import Header from './Header';
import JobDetails from './JobDetails';
import Footer from './Footer';

const JobDetailsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header className="sticky top-0 shadow-md z-10" />
      <main className="flex-grow p-4 md:p-8">
        <JobDetails />
      </main>
      <Footer className="bg-gray-100 shadow-md" />
    </div>
  );
};

export default JobDetailsPage;