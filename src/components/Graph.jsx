import React from 'react';
import { Bar } from 'react-chartjs-2'; // Importing the Bar component from react-chartjs-2 for rendering the bar chart
import { Chart, registerables } from 'chart.js'; // Importing Chart and registerables to register necessary chart components

// Registering the necessary components for Chart.js
Chart.register(...registerables);

// The Graph component is a functional React component that takes 'data' and 'title' as props
const Graph = ({ data, title }) => {
   // If there's no data or if the data array is empty, render a message indicating no data is available
  if (!data || data.length === 0) {
    return <p>No data available for {title}</p>;
  }

  // Preparing the data structure required by Chart.js for rendering the bar chart
  const chartData = {
    labels: data.map(item => item.label), // Extracting the labels from the data array
    datasets: [
      {
        label: title, // Setting the label of the dataset to the title prop
        data: data.map(item => item.value), // Extracting the values from the data array
        backgroundColor: 'rgba(75,192,192,0.6)', // Setting the background color for the bars
      },
    ],
  };

   // Rendering the bar chart with a title
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>  {/* Title of the chart */}
      <Bar data={chartData} /> {/* Bar chart rendered with the prepared data */}
    </div>
  );
};

export default Graph; // Exporting the Graph component for use in other parts of the application

