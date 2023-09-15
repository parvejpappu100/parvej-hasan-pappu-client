import React, { useState } from 'react';
import logo from "../../assets/images/Logo.png"
import "./Navbar.css"
import { Element, Link } from 'react-scroll';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('');

    const navOption = <>
        <li><Link style={activeLink === 'home' ? { color: '#FF6B00', backgroundColor: 'white', borderBottom: '4px solid #FF6B00', borderRadius: "0px" } : {}}
            className='hover:text-[#FF6B00]'
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('home')}>Home</Link></li>
        <li><Link style={activeLink === 'about' ? { color: '#FF6B00', backgroundColor: 'white', borderBottom: '4px solid #FF6B00', borderRadius: "0px" } : {}}
            className='hover:text-[#FF6B00]'
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('about')}>About</Link></li>
        <li><Link style={activeLink === 'services' ? { color: '#FF6B00', backgroundColor: 'white', borderBottom: '4px solid #FF6B00', borderRadius: "0px" } : {}}
            className='hover:text-[#FF6B00]'
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('services')}>Services</Link></li>
        <li><Link style={activeLink === 'skills' ? { color: '#FF6B00', backgroundColor: 'white', borderBottom: '4px solid #FF6B00', borderRadius: "0px" } : {}}
            className='hover:text-[#FF6B00]'
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActiveLink('skills')}>Skill</Link></li>
        <li><a>Portfolio</a></li>
        <li><a>Testimonial</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    </>

    return (
        <div>
            <div className='sticky top-0 z-50 bg-base-100'>
                <div className="navbar bg-base-100 lg:container mx-auto lg:my-8 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navOption}
                            </ul>
                        </div>
                        <a className="cursor-pointer">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
                            {navOption}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-[#FF6B00] text-white normal-case text-xl px-8 rounded-md hover:bg-[#101010] hover:text-[#FF6B00] duration-1000">Login</a>
                    </div>
                </div>
            </div>
            <div>
                <Element name="home" className="section">
                    <Banner></Banner>
                </Element>
                <Element name="about" className="section">
                    <About></About>
                </Element>
                <Element name="services" className="section">
                    <Services></Services>
                </Element>
                <Element name="skills" className="section">
                    <Skills></Skills>
                </Element>
            </div>
        </div>
    );
};

export default Navbar;