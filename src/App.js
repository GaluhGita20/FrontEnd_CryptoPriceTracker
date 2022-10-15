import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/aboutUs/aboutUs';
import News from './components/news/news';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import CoinMarkets from "./components/table/CoinMarkets";
import Container from '@mui/material/Container';
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';



function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Box backgroundColor="#fff">
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CoinMarkets />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <BarChart/>      
            </Grid>
          </Grid>
          
          <Grid item md={8} xs={12}>
              <LineChart />
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <News/>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AboutUs/> 
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Contact/> 
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
