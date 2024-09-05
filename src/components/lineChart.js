import React ,{useState} from "react";
import { Line } from "react-chartjs-2";

export default function LineChart() {

    const performance= [
        {
          "date": "2024-01-01",
          "portfolioValue": 80000
        },
        {
          "date": "2024-02-01",
          "portfolioValue": 82000
        },
        {
          "date": "2024-03-01",
          "portfolioValue": 85000
        },
        {
          "date": "2024-04-01",
          "portfolioValue": 87000
        },
        {
          "date": "2024-05-01",
          "portfolioValue": 90000
        },
        {
          "date": "2024-06-01",
          "portfolioValue": 92000
        },
        {
          "date": "2024-07-01",
          "portfolioValue": 95000
        }
      ]
    
    const [chartData, setChartData] = useState({
        labels: performance.map((data) => data.date), 
        datasets: [
          {
            label: "Users Gained ",
            data: performance.map((data) => data.portfolioValue),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "&quot;#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
  return (
    <div>
      <h1>Hello LineChart!</h1>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
