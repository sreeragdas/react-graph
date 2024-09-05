import React from "react";
import "./style.css";
import PieChart from "./components/pieChat";
import LineChart from "./components/lineChart";
import BarChart from "./components/barChart";
import GaugeChartDemo from "./components/gaugeChart";

export default function App() {
  return (
    <div style={{height:'100%' , width:'100%' }}>
    <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-evenly' }}>
   <div >    <PieChart/></div>
   <div>    <LineChart /></div>


    </div>

    <div style={{display:'flex' , flexDirection:'row', marginTop:'19px'  ,justifyContent:'space-evenly' }}>
   <div >    <BarChart/></div>
   <div>    <GaugeChartDemo /></div>


    </div>
    </div>

  );
}
