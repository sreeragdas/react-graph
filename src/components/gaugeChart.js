import React, { useState } from "react";
import GaugeChart from 'react-gauge-chart'
export default function GaugeChartDemo() {
    const chartStyle = {
        height: 250,
    }

    const riskMetrics = [{
        "volatility": 12.5,  // in percentage
        "sharpeRatio": 1.8,
        "valueAtRisk": 5000   // potential loss
    }]




    return (
        <div>
            <h1>Hello Bar Chart!</h1>
            <GaugeChart id="gauge-chart2"
                style={chartStyle}
                
                colors={['#5BE12C', '#F5CD19', '#EA4228']}
  percent={riskMetrics[0].volatility}
            />
        </div>
    );
}
