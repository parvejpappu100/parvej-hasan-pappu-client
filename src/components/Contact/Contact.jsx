import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {


    const [sending, setSending] = useState(false);

    return (
        <div className='lg:container mx-auto py-32 px-4'>
            <SectionTitle title={"Contact Me"} subTitle={"Get In Touch"}></SectionTitle>
            <div className='mt-24'>
                <div className='flex flex-col md:flex-row gap-10 px-2 lg:px-0'>
                    <div className='text-xl '>
                        <h3 className='text-2xl font-semibold uppercase'>Address</h3>
                        <p className='my-4'>Dhaka , Bangladesh</p>
                        <div className='flex items-center gap-4 my-4'>
                            <div>
                                <FaEnvelope className='text-[#FF6B00]'></FaEnvelope>
                            </div>
                            <p>parvejhasanpappu100@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-4 '>
                            <div className='text-[#FF6B00]'>
                                <FaPhoneAlt></FaPhoneAlt>
                            </div>
                            <p>01974190770 (What's Up , Telegram) <br /> 01608190770</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold my-4'>Follow Me</h3>
                            <div className='flex gap-4'>
                                <div className='tooltip bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000' data-tip="Facebook">
                                    <a href="https://www.facebook.com/pappu.parvejhasan/" target='_blank'><FaFacebookF></FaFacebookF></a>
                                </div>
                                <div className='tooltip bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000' data-tip="GitHub">
                                    <a href="https://github.com/parvejpappu100" target='_blank'><FaGithub></FaGithub></a>
                                </div>
                                <div className='tooltip bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000' data-tip="Linkedin">
                                    <a href="https://www.linkedin.com/in/parvej-hasan-pappu-569730278/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                                </div>
                                <div className='tooltip bg-[#FF6B00] text-white p-1 rounded-md hover:text-[#FF6B00] hover:bg-white duration-1000' data-tip="Instagram">
                                    <a href="https://www.instagram.com/parvejhasanpappu100/" target='_blank'><FaInstagramSquare></FaInstagramSquare></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='text-2xl font-semibold uppercase'>Send Me a Message</h3>
                        <form  className='mt-4'>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <div className='w-full'>
                                    <input  className='bg-white w-full py-4  px-3 rounded-lg border border-[#f8cfb2]' placeholder='Name' type="text" />
                                    {/* {errors.name && <span className='text-red-600'>Name is required</span>} */}
                                </div>
                                <div className='w-full'>
                                    <input  className='bg-white w-full py-4 px-3 rounded-lg border border-[#f8cfb2]' placeholder='Email' type="email" name="email" id="" />
                                    {/* {errors.email && <span className='text-red-600'>Email is required</span>} */}
                                </div>
                            </div>
                            <textarea  className='bg-white w-full mt-5 p-5 rounded-lg border border-[#f8cfb2] text-xl' name="message" placeholder='Tell me more about your needs...' id="" cols="30" rows="5"></textarea>
                            {/* {errors.message && <span className='text-red-600'>Please write something</span>} */}
                            <div className='flex justify-center'>
                                <input disabled={sending} className='btn bg-[#FF6B00] text-white normal-case text-xl px-8 rounded-md hover:bg-[#101010] hover:text-[#FF6B00] duration-1000 mt-5' type="submit" value={sending ? "Sending..." : "Send Message"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;