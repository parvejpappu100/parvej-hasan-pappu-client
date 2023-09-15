import React, { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';

const TabItem = ({ project }) => {

    const { category, name, image } = project;

    const [showModal, setShowModal] = useState(false);

    return (
        <div className=''>
            <div onClick={() => setShowModal(true)} className='relative mt-12 cursor-pointer'>
                <div className="relative max-w-full h-[450px] overflow-hidden ">
                    <div>
                        <img
                            src={image}
                            alt={name}
                            className=" object-cover object-top border"
                        />
                    </div>
                </div>
                <div className='bg-[#FF6B00]  opacity-0 hover:opacity-100 text-white absolute inset-x-10 bottom-10  flex justify-center items-center text-center transition-opacity duration-1000 p-5 rounded-md'>
                    <div>
                        <h3 className='text-2xl mb-3'>{name}</h3>
                        <p className='text-xl'>{category}</p>
                    </div>
                </div>
            </div>
            <div>
                <ProjectModal project={project} showModal={showModal} setShowModal={setShowModal}></ProjectModal>
            </div>
        </div>
    );
};

export default TabItem;