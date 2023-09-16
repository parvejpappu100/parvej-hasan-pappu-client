import React from 'react';
import logo from "../../assets/images/LogoWhite.png"
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className=" lg:container mx-auto footer py-24 px-4  text-neutral-content">
                <aside>
                    <img src={logo} alt="" />
                    <p className='text-white font-medium'>Parvej Hasan Pappu<br />MERN Stack Developer | Building Next-Level Web Solutions</p>
                </aside>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className='flex gap-4 text-xl'>
                        <div className=' bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000'>
                            <a href="https://www.facebook.com/pappu.parvejhasan/" target='_blank'><FaFacebookF></FaFacebookF></a>
                        </div>
                        <div className=' bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000' >
                            <a href="https://github.com/parvejpappu100" target='_blank'><FaGithub></FaGithub></a>
                        </div>
                        <div className=' bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000'>
                            <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                        </div>
                        <div className=' bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000'>
                            <a href="https://www.instagram.com/parvejhasanpappu100/" target='_blank'><FaInstagramSquare></FaInstagramSquare></a>
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center py-10 px-4 text-white border-t border-gray-400">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Parvej Hasan Pappu</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;