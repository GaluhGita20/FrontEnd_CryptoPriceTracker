import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Chart, registerables} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import { BloodtypeOutlined } from '@mui/icons-material';

Chart.register(...registerables);

const LineChart = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

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
            label: 'All-Time-Low',
            fontColor: colors.common.white,
            fontWeight: BloodtypeOutlined,
            data: chartData.sort((a, b) => b.current_price - a.current_price).slice(0, 10).map(coin => coin.ath),
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderWidth: 2
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
                theme : "#111" ,
                display: isMd ? true : false,
                color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
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
                    color: theme.palette.text.primary,
                    maxRotation: 45,
                    minRotation: 45,
                },
                grid: {
                    color: theme.palette.divider,
                },
            },
            y: {
                ticks: {
                    color: theme.palette.text.primary,
                    padding: 35,
                    callback: (value) => numeral(value).format('$0,0.00')
                },
                display: true,
                borderDash: [5, 5],
                grid: {
                    color: theme.palette.divider,
                },
            },
        },
      };

    return (
        
        <Card sx={{marginTop: '50px'  , backgroundColor:"#fff"}} >
            <CardHeader
                title='Top 10 Cryptocurrencies Berdasarkan All-Time-Low' 
                subheader='Top 10 Cryptocurrencies Diukur Berdasarkan All-Time-Low (ATL)'
            />
            <Divider />
            <CardContent>
                <Box sx={{ height: 400, position: 'relative' }}>
                    <Line
                        data={data} 
                        options={options} 
                        plugins={[ChartDataLabels]} 
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default LineChart;