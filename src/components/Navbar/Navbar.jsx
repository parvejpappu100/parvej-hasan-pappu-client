import React from 'react';
import logo from "../../assets/images/Logo.png"
import "./Navbar.css"

const Navbar = () => {

    const navOption = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Skill</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Testimonial</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    </>

    return (
        <div>
            <div className="navbar z-50 bg-base-100 lg:container mx-auto lg:my-8">
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
    );
};

export default Navbar;