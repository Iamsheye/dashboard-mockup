import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

interface IChart {
  color: string;
  label: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const Chart = ({ color, label }: IChart) => {
  const data = {
    labels,
    datasets: [
      {
        label,
        data: [12, 18, 44, 34, 20, 30, 40, 32],
        borderColor: color,
        backgroundColor: "#fff",
        borderWidth: 2,
        pointBorderWidth: 1,
        radius: 6,
        pointHoverBorderWidth: 9,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
