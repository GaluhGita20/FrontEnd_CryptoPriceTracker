import React from "react";
import CoinMarkets from "./table/CoinMarkets";
import Container from '@mui/material/Container';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './charts/DoughnutChart';

const allChart=()=>{
    return(
        <Box backgroundColor="#fff">
          <Container maxWidth={false}>
           <Grid container spacing={3}>
             <Grid item xs={12}>
               <CoinMarkets />
             </Grid>
             <Grid item xs={12}>
               <BarChart/>      
             </Grid>
             <Grid item md={4} xs={12}>
               <DoughnutChart />
             </Grid>
             <Grid item md={8} xs={12}>
                 <LineChart />
             </Grid>
           </Grid>
         </Container>
        </Box>
    );
}
export default allChart;