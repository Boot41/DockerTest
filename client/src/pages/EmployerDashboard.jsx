const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="logo">Company Logo</div>
        <div className="user-profile-menu">User Profile</div>
      </header>
      
      <main className="flex-1 p-4 space-y-4">
        <JobPostingForm />
        <JobPostSuccessNotification />
        <JobListingManager />
      </main>
      
      <footer className="bg-gray-800 text-white p-4">
        <div className="footer-content">Footer Content</div>
      </footer>
    </div>
  );
};