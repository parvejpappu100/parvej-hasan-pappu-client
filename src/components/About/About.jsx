import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import img from "../../assets/images/about.png"
import projectLogo from "../../assets/images/projectLogo.png"
import exLogo from "../../assets/images/exLogo.png"
import { FaRegCheckSquare } from 'react-icons/fa';

const About = () => {
    return (
        <div className='lg:container mx-auto py-24'>
            <SectionTitle title={"About Me"} subTitle={"Know Me More"}></SectionTitle>
            <div className='flex flex-col lg:flex-row px-4 gap-20 items-center mt-28 '>
                <div className='w-full'>
                    <img className=' hover:grayscale grayscale-0  transition duration-500' src={img} alt="" />
                </div>
                <div className='w-full'>
                    <div className='flex  gap-3 items-center'>
                        <div className='bg-[#FF6B00] p-2 w-2 h-2 rounded-full'></div>
                        <h5 className='text-xl  '>About Me</h5>
                    </div>
                    <h4 className='text-2xl md:text-3xl lg:text-4xl font-bold my-5'>Turning Ideas into Digital Realities: Your Web Development Partner</h4>
                    <p className='my-8'>Hello, I'm a versatile MERN stack developer with a passion for crafting extraordinary web experiences. I excel in frontend and backend development, creating captivating user interfaces and robust server-side functionality. With expertise in HTML, CSS, and JavaScript, I build visually stunning and responsive websites. Let's collaborate to bring your vision to life and make an impact in the digital realm</p>
                    <p>Let's collaborate and transform your ideas into remarkable web experiences that leave a lasting impression.</p>
                    <div className='my-8 flex flex-col md:flex-row gap-5 md:gap-24'>
                        <div className='flex gap-2'>
                            <img src={projectLogo} alt="" />
                            <div>
                                <h5 className='text-xl font-bold text-[#FF6B00]'>45+ </h5>
                                <h5 className='text-xl font-semibold'>Complete Project</h5>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img src={exLogo} alt="" />
                            <div>
                                <h5 className='text-xl font-bold text-[#FF6B00]'>1+ </h5>
                                <h5 className='text-xl font-semibold'>Years of experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row  md:gap-16 '>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#FF6B00]'></FaRegCheckSquare>
                                <h5>Extensive MERN Stack Proficiency</h5>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#FF6B00]'></FaRegCheckSquare>
                                <h5>Creative Front-End Expertise</h5>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#FF6B00]'></FaRegCheckSquare>
                                <h5>React.js Specialist</h5>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaRegCheckSquare className='text-[#FF6B00]'></FaRegCheckSquare>
                                <h5>Custom Web Application Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <button className="btn bg-[#FF6B00] text-white normal-case text-xl px-8 rounded-md hover:bg-[#101010] hover:text-[#FF6B00] duration-1000">
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;