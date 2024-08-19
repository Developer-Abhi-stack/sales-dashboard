import React, { useEffect, useState } from 'react';
import Graph from './Graph';
import SalesTable from './SalesTable';
import { fetchTodaySales } from '../api.js';

const Dashboard1 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodaySales()
      .then(setData)
      .catch(err => {
        console.error("Error fetching sales data:", err);
        setError("Failed to load sales data.");
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Today's Sales</h1>
      {error && <p className="text-red-500">{error}</p>}
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
