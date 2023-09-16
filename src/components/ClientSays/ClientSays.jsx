import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./ClientSays.css"
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const ClientSays = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("testimonial.json")
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className='lg:container mx-auto pb-32 px-3'>
            <SectionTitle title={"Testimonial"} subTitle={"Client Feedback"}></SectionTitle>
            <div className='mt-24'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    customClass="mySwiper"
                >

                    {testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <div className='p-6 bg-[#FFF5EF] rounded-lg h-[300px]'>
                            <div className='flex gap-4 items-center'>
                                <img className='w-[80px] h-[80px] rounded-full' src={testimonial.img} alt="" />
                                <div>
                                    <h3 className='font-semibold text-xl'>{testimonial.name}</h3>
                                    <p>{testimonial.from}</p>
                                </div>
                            </div>
                            <div className='mt-7'>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={testimonial.rating}
                                    readOnly
                                />
                                <p className='italic mt-3'>"{testimonial.details}"</p>
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default ClientSays;