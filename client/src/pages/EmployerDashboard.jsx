import React from 'react';
import Header from './Header';
import JobPostingForm from './JobPostingForm';
import JobListingManager from './JobListingManager';
import Footer from './Footer';

const EmployerDashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header className="sticky top-0 shadow-md" />
            <main className="flex-grow p-4 md:flex md:flex-col">
                <div className="mb-4">
                    <JobPostingForm className="bg-gray-100 p-4 rounded-md shadow" />
                </div>
                <div className="mt-4">
                    <JobListingManager className="bg-gray-100 p-4 rounded-md shadow" />
                </div>
            </main>
            <Footer className="w-full bg-gray-200 text-center p-4" />
        </div>
    );
};

export default EmployerDashboard;