import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJs} from "chart.js/auto";

const LineCharts = ({lineData}) => {
    return <Line data={lineData}/>;
    
}
export default LineCharts;