import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/aboutUs/aboutUs';
import News from './components/news/news';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
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
  );
}

export default App;
