import React, { useState } from 'react';
import DatePicker from './DatePicker';
import Graph from './Graph';
import SalesTable from './SalesTable';
import { fetchComparisonSales } from '../api.js';

const Dashboard2 = () => {
  // State to hold the selected dates
  const [dates, setDates] = useState({ date1: null, date2: null });

  // State to hold the fetched data
  const [data, setData] = useState(null);

  // State to hold any error message if the data fetching fails
  const [error, setError] = useState(null);

  // Handler function for date changes
  const handleDateChange = (date1, date2) => {
    // Update the dates in the state
    setDates({ date1, date2 });
    // Fetch comparison sales data for the selected dates
    fetchComparisonSales(date1, date2)
      .then(setData) // Update the data state on success
      .catch(err => { // Handle any errors that occur during fetching
        console.error("Error fetching sales data:", err);
        setError("Failed to fetch sales data.");  // Update the error state
        setData(null);  // Clear the data state
      });
  };

  return (
    <div className="p-4">
      {/* Page title */}
      <h1 className="text-2xl font-bold mb-4">Sales Comparison Between Two Dates</h1>

      {/* Date picker component for selecting dates */}
      <DatePicker onDateChange={handleDateChange} />

      {/* Display error message if there's an error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Conditionally render graphs and table if data is available, otherwise show loading text */}
      {data ? (
        <>
        {/* Render graph for product-level comparison */}
          <Graph data={data.products} title="Product-Level Comparison" />

          {/* Render graph for category-level comparison */}
          <Graph data={data.categories} title="Category-Level Comparison" />

          {/* Render sales data in a table */}
          <SalesTable data={data.details} />
        </>
      ) : (
        <p>Loading...</p> // Show loading text while data is being fetched
      )}
    </div>
  );
};

export default Dashboard2;
