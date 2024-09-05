import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import JobSearchResultsPage from './pages/JobSearchResultsPage';
import JobDetailsPage from './pages/JobDetailsPage'; // Importing JobDetailsPage

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/employer-dashboard">Employer Dashboard</Link>
            <Link to="/candidate-dashboard">Candidate Dashboard</Link>
            <Link to="/job-search-results">Job Search Results</Link>
            <Link to="/job-details">Job Details</Link> {/* Adding navigation link for JobDetailsPage */}
          </nav>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
          <Route path="/job-search-results" element={<JobSearchResultsPage />} />
          <Route path="/job-details" element={<JobDetailsPage />} /> {/* Defining route for JobDetailsPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;