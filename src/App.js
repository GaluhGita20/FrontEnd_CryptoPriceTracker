import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/aboutUs/aboutUs';
import News from './components/news/news';
import Contact from './components/contact/contact';
import Chart from './components/chart/chart';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <News/>
      <AboutUs/>
      <Chart/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
