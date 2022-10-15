import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { deepPurple, deepOrange, lightGreen, lightBlue, cyan, red, pink, indigo, teal, brown } from '@mui/material/colors';
import { colors } from '@mui/material';

Chart.register(...registerables);

const DoughnutChart = () => {
    const [chartData, setChartData] = useState([]);

    const fetchTopCoins = () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setChartData(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchTopCoins();
    }, []);

    const data = {
        labels: chartData.sort((a, b) => a.current_price > b.current_price ? 1 : -1).filter(coin => coin.current_price > 10).slice(0, 10).map(coin => coin.name),
        datasets: [
            {
                data: chartData.sort((a, b) => a.current_price > b.current_price ? 1 : -1).filter(coin => coin.current_price > 10).slice(0, 10).map(coin => coin.current_price),
                backgroundColor: [
                    red[500],
                    deepOrange[100],
                    lightBlue[600],
                    lightGreen[600],
                    cyan[600],
                    pink[100],
                    indigo[300],
                    teal[300],
                    brown[300],
                    deepPurple[600],
                ],
                borderWidth: 1,
                borderColor: colors.common.white,
            },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
        },
        cutout: '50%',
        plugins: {
            legend: {
                display: true,
                padding: 30,
                labels: {
                    color: '#000',
                    font: {
                        size: 14,
                    },
                },
            },
            datalabels: {
                display: true,
                color: colors.common.white,
                align: 'center',
                labels: {
                    title: {
                        font: {
                            weight: 'bold',
                            size: 13,
                        },
                    },
                },
                formatter: (value) => numeral(value).format('$0,0.00'),
            },
        },
    };

    return (
        <Card sx={{marginTop: '50px' }}>
            <CardHeader 
                title='Top 10 Cryptocurrencies Termurah' 
                subheader='Top 10 Cryptocurrencies Termurah Sekitar $10' 
            />
            <Divider />
            <CardContent>
                <Box sx={{ height: 400, position: 'relative' }}>
                    <Pie
                        data={data} 
                        options={options} 
                        plugins={[ChartDataLabels]} 
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default DoughnutChart;