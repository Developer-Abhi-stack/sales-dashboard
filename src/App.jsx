import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <Link to="/" className="mr-4">Today's Sales</Link>
          <Link to="/comparison">Sales Comparison</Link>
        </nav>
        <div className="p-4">
          <Routes>
            <Route exact path="/" element={<Dashboard1 />} />
            <Route path="/comparison" element={<Dashboard2 /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
