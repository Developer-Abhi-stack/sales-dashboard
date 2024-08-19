import React, { useEffect, useState } from 'react';
import Graph from './Graph';
import SalesTable from './SalesTable';
import { fetchTodaySales } from '../api.js';

// Dashboard1 Component: Displays today's sales data, including graphs and a table.
const Dashboard1 = () => {
   // State to hold sales data
  const [data, setData] = useState(null);
  // State to hold any error messages
  const [error, setError] = useState(null);

   // useEffect hook to fetch today's sales data when the component mounts
  useEffect(() => {
    // Fetch sales data from the API
    fetchTodaySales()
      .then(setData) // If successful, store the data in state
      .catch(err => {
        console.error("Error fetching sales data:", err); // Log any errors
        setError("Failed to load sales data."); // Set an error message in state
      });
  }, []); // Empty dependency array means this effect runs once on component mount
  return (
    <div className="p-4">
      {/* Title of the dashboard */}
      <h1 className="text-2xl font-bold mb-4">Today's Sales</h1>
      {/* Display error message if there's an error */}
      {error && <p className="text-red-500">{error}</p>}
       {/* If data is loaded, render the graphs and table, otherwise show loading message */}
      {data ? (
        <>
          <Graph data={data.products} title="Product-Level Sales" />
          <Graph data={data.categories} title="Category-Level Sales" />
          <SalesTable data={data.details} />
        </>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard1;
