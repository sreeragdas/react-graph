import React,{useState} from "react";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
export default function PieChart() {
    const assetAllocation= [
        {
          "assetType": "Stocks",
          "percentage": 50,
          "value": 50000
        },
        {
          "assetType": "Bonds",
          "percentage": 20,
          "value": 20000
        },
        {
          "assetType": "Real Estate",
          "percentage": 15,
          "value": 15000
        },
        {
          "assetType": "Cryptocurrency",
          "percentage": 10,
          "value": 10000
        },
        {
          "assetType": "Cash",
          "percentage": 5,
          "value": 5000
        }
      ]

      const [chartData, setChartData] = useState({
        labels: assetAllocation.map((data) => data.percentage), 
        datasets: [
          {
            label: "Users Gained ",
            data: assetAllocation.map((data) => data.value),
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
    <div style={{ height:'50vh'}} >
        {/* {assetAllocation.map((item, index)=>{
          return(<div>{item.percentage}</div>)
        })} */}
   
   <h2 >Pie Chart</h2>
    
     <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Asset Allocation Data"
            }
          }
        }}
      />
 
 

    </div>
  );
}
