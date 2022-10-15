import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { deepPurple, lightBlue, pink, purple, teal, lime } from '@mui/material/colors';

Chart.register(
    BarElement,
    CategoryScale,
    LinearScale
);

const BarChart = () => {
   

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
        labels: chartData.sort((a, b) => b.current_price - a.current_price).slice(0, 10).map(coin => coin.name),
        datasets: [{
            data: chartData.sort((a, b) => b.current_price - a.current_price).slice(0, 10).map(coin => coin.current_price),
            label: '${chartData.length} Crypto Dengan Harga Pasar Termahal',
            backgroundColor: [
                    deepPurple[600],
                    pink[400],
                    lightBlue[300],
                    teal[400],
                    purple[300],
                    lime[500]
                ],
        }],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                
                anchor: 'end',
                align: 'top',
                labels: {
                    title: {
                        font: {
                            weight: 'bold',
                            size: 13,
                        },
                        padding: 10,
                    },
                },
                formatter: (value) => numeral(value).format('$0,0.00'),
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                },
                title: {
                    display: true,
                    text: 'Cryptocurrencies',
                    font: {
                        weight: 'bold',
                        size: 18,
                    },
                    padding: 10,
                },
            },
            y: {
                ticks: {
                    padding: 50,
                    callback: (value) => numeral(value).format('$0,0.00')
                },
                display: true,
                borderDash: [5, 5],
                title: {
                    display: true,
                    text: 'Current price',
                    font: {
                        weight: 'bold',
                        size: 18,
                    },
                    padding: 10,
                },
            },
        },
    };

    return (
        <Card sx={{marginTop: '50px' }}>
            <CardHeader 
                title='Top 10 Cryptocurrencies Dengan Harga Pasar Termahal' 
                subheader='Top 10 Cryptocurrencies Termahal Diukur dengan Field Market Price' 
            />
            <Divider />
            <CardContent>
                <Box sx={{ height: 600, position: 'relative', marginTop: '10px' }}>
                    <Bar
                        data={data} 
                        options={options} 
                        plugins={[ChartDataLabels]} 
                    />
                </Box>
            </CardContent>
            
        </Card>
    );
};

export default BarChart;