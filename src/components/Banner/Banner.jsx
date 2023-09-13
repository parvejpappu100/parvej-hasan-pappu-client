import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import myPhoto from "../../assets/images/bannerImg.png"
import { FaDownload } from "react-icons/fa";



const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#FFF3EA] to-[#FFF8EC] '>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:container mx-auto px-3'>
                <div className=''>
                    <div className='flex  gap-3 items-center'>
                        <div className='bg-[#FF6B00] p-2 w-2 h-2 rounded-full'></div>
                        <h5 className='text-xl font-semibold uppercase'>Hi! I'm</h5>
                    </div>
                    <h3 className='font-bold text-2xl md:text-4xl my-4 lg:text-6xl'>Parvej Hasan Pappu</h3>

                    <h2 className='text-2xl font-bold md:text-4xl lg:text-5xl'>I'm a  <TypeAnimation
                        sequence={[
                            " Web Developer",
                            1000,
                            " MERN Stack Developer",
                            1000,
                            " ReactJS Developer",
                            1000,
                            " Front End Developer",
                            1000
                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ fontWeight: 'bold', display: 'inline-block' }}
                        repeat={Infinity}
                        className='text-2xl font-bold text-[#FF6B00] md:text-4xl lg:text-6xl'
                    /></h2>
                    <h2>

                    </h2>

                    <p className='my-5'>I'm a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack developer, dedicated to crafting innovative web applications. With expertise in both front-end and back-end technologies, I specialize in creating responsive, high-performance websites. Let's collaborate and turn your ideas into reality!</p>
                    <div>
                        <button className="btn bg-[#FF6B00] text-white normal-case text-xl px-8 rounded-md hover:bg-[#101010] hover:text-[#FF6B00] duration-1000">
                            Download Resume
                            <FaDownload></FaDownload>
                        </button>
                    </div>
                </div>
                <div className='w-full pt-4 mb-10 lg:mb-0'>
                    <img src={myPhoto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;