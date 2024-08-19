import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Graph = ({ data, title }) => {
  if (!data || data.length === 0) {
    return <p>No data available for {title}</p>;
  }

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: title,
        data: data.map(item => item.value),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Graph;
