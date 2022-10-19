import React, {Component, useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyle.css'
// import './NavbarStyle.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        
        <div name='top' className='navbar fixed-top'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />Crypto &nbsp;<span style={{ fontWeight:"bold" }}>Tracker</span>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link> </li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li> */}

                    {/* <li><Link to='/'>Home</Link></li> */}
                    
                    <li><a href="home" style={{color:'white', textDecoration:'none'}}> Home</a></li>
                    <li><a href="about" style={{color:'white', textDecoration:'none'}}> About Us</a></li>
                    <li><a href="news" style={{color:'white', textDecoration:'none'}}>News</a></li>
                    <li><a href="chart" style={{color:'white', textDecoration:'none'}}>Chart</a></li>
                    <li><a href="contact" style={{color:'white', textDecoration:'none'}}>Contact</a></li>
                    {/* <button>Sign in</button> */}
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
