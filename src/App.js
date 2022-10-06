import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/aboutUs/aboutUs';
import News from './components/news/news';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Table_Realtime from "./components/chart/TableCrypto";
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Table_Realtime/>
      <News/>
      <AboutUs/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
