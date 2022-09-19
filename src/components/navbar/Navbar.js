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
                    <SiDatabricks className='icon' />
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link> </li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li> */}

                    {/* <li><Link to='/'>Home</Link></li> */}
                    <li>Home</li>
                    <li>About Us</li>
                    <li>News</li>
                    <li>Chart</li>
                    <li>Contact</li>
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
