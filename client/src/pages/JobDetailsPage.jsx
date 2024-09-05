import React from 'react';
import Header from './Header';
import JobDetails from './JobDetails';
import ApplicantReview from './ApplicantReview';
import Footer from './Footer';

const JobDetailsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="sticky top-0 z-50 shadow-md" />
            <main className="flex-grow p-4">
                <section className="bg-white shadow-lg border border-gray-300 mb-4 p-6">
                    <JobDetails />
                </section>
                <section className="bg-white shadow-lg border border-gray-300 p-6">
                    <ApplicantReview />
                </section>
            </main>
            <Footer className="bg-white shadow-md" />
        </div>
    );
};

export default JobDetailsPage;