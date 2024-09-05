import React from 'react';
import Header from './Header';
import JobDetails from './JobDetails';
import JobApplicationForm from './JobApplicationForm';
import Footer from './Footer';

const JobDetailsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="sticky top-0 shadow-md bg-white" />
            <div className="flex flex-col md:flex-row flex-1">
                <div className="w-full md:w-2/3 p-4">
                    <JobDetails />
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <JobApplicationForm />
                </div>
            </div>
            <Footer className="bg-gray-800 text-white w-full" />
        </div>
    );
};

export default JobDetailsPage;