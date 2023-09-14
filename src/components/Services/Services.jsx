import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaCloudUploadAlt, FaCode, FaCodeBranch, FaServer } from "react-icons/fa";
import { MdBuild, MdWeb } from 'react-icons/md';
import { AiOutlineMobile } from 'react-icons/ai';
import { GiDatabase } from 'react-icons/gi';

const Services = () => {
    return (
        <div className='lg:container mx-auto px-3 py-32'>
            <SectionTitle title={"My Service"} subTitle={"What I Do"}></SectionTitle>
            <div className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <FaCode className='text-6xl text-[#FF6B00]'></FaCode>
                    <h3 className='text-xl my-3'>Full-Stack Web Development</h3>
                    <p>Develop end-to-end web applications using the MERN (MongoDB, Express, React, Node.js) stack, ensuring seamless integration between the frontend and backend.</p>
                </div>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <MdWeb className='text-6xl text-[#FF6B00]'></MdWeb>
                    <h3 className='text-xl my-3'>Custom Web Application Development</h3>
                    <p>Build customized web applications tailored to your specific business needs, leveraging the power of the MERN stack to deliver high-performance and scalable solutions.</p>
                </div>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <AiOutlineMobile className='text-6xl text-[#FF6B00]'></AiOutlineMobile>
                    <h3 className='text-xl my-3'>Responsive UI/UX Design</h3>
                    <p>Create intuitive and visually appealing user interfaces that adapt smoothly across different devices, providing an exceptional user experience on desktops, tablets, and mobile devices.</p>
                </div>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <FaServer className='text-6xl text-[#FF6B00]'></FaServer>
                    <h3 className='text-xl my-3'>RESTful API Development</h3>
                    <p>Design and develop robust APIs using Express and Node.js, allowing smooth communication between your frontend and backend components and enabling seamless data flow.</p>
                </div>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <GiDatabase className='text-6xl text-[#FF6B00]'></GiDatabase>
                    <h3 className='text-xl my-3'>Database Integration and Management</h3>
                    <p>Implement MongoDB as the database solution for your web applications, ensuring efficient data storage, retrieval, and management.</p>
                </div>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <FaCodeBranch className='text-6xl text-[#FF6B00]'></FaCodeBranch>
                    <h3 className='text-xl my-3'>Third-Party API Integration</h3>
                    <p>Integrate third-party APIs to add additional functionality and enhance the capabilities of your web applications, enabling seamless integration with external services and platforms.</p>
                </div>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <FaCloudUploadAlt className='text-6xl text-[#FF6B00]'></FaCloudUploadAlt>
                    <h3 className='text-xl my-3'>Deployment and Hosting</h3>
                    <p>Deploy and host your MERN stack applications on cloud platforms such as Heroku or AWS, ensuring scalability, security, and reliability.</p>
                </div>
                <div className='flex flex-col hover:bg-[#FFF5EF] duration-500 text-center items-center border border-[#f5b58a] p-8 rounded '>
                    <MdBuild className='text-6xl text-[#FF6B00]'></MdBuild>
                    <h3 className='text-xl my-3'>Maintenance and Support</h3>
                    <p>Provide ongoing maintenance, updates, and support for your MERN stack applications, ensuring their smooth operation and addressing any issues that may arise.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;