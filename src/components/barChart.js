import React ,{useState} from "react";
import { Bar } from "react-chartjs-2";
export default function BarChart() {

    const transactions= [
        {
          "date": "2024-01-10",
          "type": "Buy",
          "asset": "AAPL",
          "quantity": 10,
          "pricePerUnit": 150,
          "totalValue": 1500
        },
        {
          "date": "2024-02-15",
          "type": "Sell",
          "asset": "TSLA",
          "quantity": 5,
          "pricePerUnit": 700,
          "totalValue": 3500
        },
        {
          "date": "2024-03-05",
          "type": "Buy",
          "asset": "BTC",
          "quantity": 0.1,
          "pricePerUnit": 45000,
          "totalValue": 4500
        },
        {
          "date": "2024-04-22",
          "type": "Buy",
          "asset": "MSFT",
          "quantity": 15,
          "pricePerUnit": 250,
          "totalValue": 3750
        },
        {
          "date": "2024-05-12",
          "type": "Sell",
          "asset": "AAPL",
          "quantity": 5,
          "pricePerUnit": 160,
          "totalValue": 800
        }
      ]
    
    
    
    const [chartData, setChartData] = useState({
        labels: transactions.map((data) => data.date), 
        datasets: [
          {
            label: "Transaction History Data",
            data: transactions.map((data) => data.totalValue),
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
      <h1>Hello Bar Chart!</h1>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Transaction History Data"
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
