"use client"
import React from 'react'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const typesData = [
    {
        id: 1,
        title: 'ქორწილისთვის',
        image: 'https://duruthemes.com/demo/html/renax/light/img/cars/02.jpg',
        href: '/car-details/1',
    },
    {
        id: 2,
        title: 'ბიზნეს კლასის',
        image: 'https://duruthemes.com/demo/html/renax/light/img/cars/01.jpg',
        href: '/car-details/2',
    },
    {
        id: 3,
        title: 'SUV',
        image: 'https://duruthemes.com/demo/html/renax/light/img/cars/03.jpg',
        href: '/car-details/3',
    },
    {
        id: 4,
        title: 'ქალაქისთვის',
        image: 'https://duruthemes.com/demo/html/renax/light/img/cars/04.jpg',
        href: '/car-details/4',
    },
    {
        id: 5,
        title: 'სპორტული',
        image: 'https://duruthemes.com/demo/html/renax/light/img/cars/05.jpg',
        href: '/car-details/5',
    },
    {
        id: 6,
        title: 'მინივენი',
        image: 'https://duruthemes.com/demo/html/renax/light/img/cars/06.jpg',
        href: '/car-details/6',
    },
];

const customStyles = `
  .swiper-pagination {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 12px !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    z-index: 10 !important;
    margin:0 auto !important;
  }
  
  .swiper-pagination-bullet {
    width: 16px !important;
    height: 16px !important;
    background-color: #f5b754 !important;
    opacity: 0.5 !important;
    gap: 12px !important;
    border-radius: 50% !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    background-color: #f5b754 !important;
    transform: scale(1.2) !important;
  }
`;

// #f5b754
export const Types = () => {
    return (
        <>
            {/* Custom Styles for Pagination */}
            <style jsx>{customStyles}</style>
            
            <div className="py-20 bg-white ">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[20px] lg:text-[30px] font-bold text-black">
                            Rental Car Types
                        </h2>
                    </div>

                    {/* Swiper Slider */}
                    <div className="relative">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                            }}
                            spaceBetween={24}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 3, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 24 },
                            }}
                            className="!pb-12"
                        >
                            {typesData.map((type) => (
                                <SwiperSlide key={type.id}>
                                    <div className="item">
                                        <img src={type.image} alt={type.title} />
                                        <div className="title">
                                            <h4>{type.title}</h4>
                                        </div>

                                        <div className="curv-butn icon-bg">
                                            <Link href={type.href} className="vid">
                                                <div className="icon flex items-center justify-center w-[60px] h-[60px] border border-[#f5b754] bg-[#f5b754] rounded-full">
                                                    <ArrowUp className="w-5 h-5 text-black rotate-45" />
                                                </div>
                                            </Link>
                                            <div className="br-left-top">
                                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff"></path>
                                                </svg>
                                            </div>
                                            <div className="br-right-bottom">
                                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </>
    )
}