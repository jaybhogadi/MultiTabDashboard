import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const Graph = () => {
  const data = {
    labels: ['85-88%', '88-91%', '91-94%', '94-97%', '97-100%'], // Labels for the x-axis
    datasets: [
      {
        label: 'Values',
        data: [401, 4064, 15563, 16571, 5059], // Data values for the bars
        backgroundColor: 'rgba(54, 162, 235, 0.7)', // Bar color in blue with more opacity
        borderColor: 'rgba(54, 162, 235, 1)', // Bar border color in blue
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`, // Custom tooltip label
        },
      },
      datalabels: {
        color: '#000', // Color of the data labels
        anchor: 'end', // Position of the label relative to the bar
        align: 'top', // Align the label at the top of the bar
        offset: 4, // Distance between the bar and the label
        font: {
          size: 12, // Font size for data labels
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12, // Font size for x-axis labels
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12, // Font size for y-axis labels
          },
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };

  return (
    <div className="bar-chart" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3>Distribution Across Confidence Score</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
