import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/aboutUs/aboutUs';
import News from './components/news/news';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
// import CoinMarkets from "./components/table/CoinMarkets";
// import Container from '@mui/material/Container';
// import BarChart from './components/charts/BarChart';
// import LineChart from './components/charts/LineChart';
// import Grid from '@mui/material/Grid';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import { Doughnut } from 'react-chartjs-2';
// import DoughnutChart from './components/charts/DoughnutChart';
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Link from "react-router-dom"
import Navs from './components/navbarHeros';
import Allchart from './components/allCharts';
function App() {
  return (
    <BrowserRouter>
      <Navs/>
      <Routes>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/chart' element={<Allchart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    // <div className='app'>


      // {/* <BrowserRouter>
      //     {/* <Header /> */}
      //     {/* <Route  path="/news" component={News} /> */}
      //     {/* <Route exact path="/contact" component={Contact} /> */}
      // {/* </BrowserRouter>

      // <Navbar/>
      // <Hero/>
      // <Box backgroundColor="#fff">
      //   <Container maxWidth={false}>
      //     <Grid container spacing={3}>
      //       <Grid item xs={12}>
      //         <CoinMarkets />
      //       </Grid>
      //       <Grid item xs={12}>
      //         <BarChart/>      
      //       </Grid>
      //       <Grid item md={4} xs={12}>
      //         <DoughnutChart />
      //       </Grid>
      //       <Grid item md={8} xs={12}>
      //           <LineChart />
      //       </Grid>
      //     </Grid>
      //   </Container>
      //     <Grid container spacing={3}>
      //       <Grid item xs={12}>
    //         {/* <Route  path="/news" component={News} /> */}
    //           {/* <Link to ='News'/>
    //           <BrowserRouter> */}
    //           {/* <Header /> */}
    //           {/* <Route  path="/news" component={News} /> */}
    //           {/* <Route exact path="/contact" component={Contact} /> */}
    //           {/* </BrowserRouter> */}
    //         {/* </Grid>
    //       </Grid>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12}>
    //           <AboutUs/> 
    //         </Grid>
    //       </Grid>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12}>
    //           <Contact/> 
    //         </Grid>
    //       </Grid>
    //   </Box>
    //   <Footer/>  */}
    // {/* </div> */}

  );
}

export default App;
