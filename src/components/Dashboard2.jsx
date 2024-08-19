import React, { useState } from 'react';
import DatePicker from './DatePicker';
import Graph from './Graph';
import SalesTable from './SalesTable';
import { fetchComparisonSales } from '../api.js';

const Dashboard2 = () => {
  const [dates, setDates] = useState({ date1: null, date2: null });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleDateChange = (date1, date2) => {
    setDates({ date1, date2 });
    fetchComparisonSales(date1, date2)
      .then(setData)
      .catch(err => {
        console.error("Error fetching sales data:", err);
        setError("Failed to fetch sales data.");
        setData(null);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Comparison Between Two Dates</h1>
      <DatePicker onDateChange={handleDateChange} />
      {error && <p className="text-red-500">{error}</p>}
      {data ? (
        <>
          <Graph data={data.products} title="Product-Level Comparison" />
          <Graph data={data.categories} title="Category-Level Comparison" />
          <SalesTable data={data.details} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard2;
