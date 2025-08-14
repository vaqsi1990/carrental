"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'

import { ChevronLeft, ChevronRight } from 'lucide-react'

// Car data matching Renax theme
const luxuryCars = [
  {
    id: 1,
    name: 'Lamborghini Urus',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 750,
    seats: 4,
    transmission: 'Auto',
    bags: 2,
    age: 25,
    category: 'Premium'
  },
  {
    id: 2,
    name: 'Aston Martin DBX',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 500,
    seats: 4,
    transmission: 'Auto',
    bags: 2,
    age: 25,
    category: 'Premium'
  },
  {
    id: 3,
    name: 'Bugatti Mistral W16',
    image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 800,
    seats: 2,
    transmission: 'Auto',
    bags: 2,
    age: 25,
    category: 'Premium'
  },
  {
    id: 4,
    name: 'Bentley Bentayga',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 600,
    seats: 4,
    transmission: 'Auto',
    bags: 2,
    age: 25,
    category: 'Premium'
  },
  {
    id: 5,
    name: 'Rolls Royce Cullinan',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 900,
    seats: 4,
    transmission: 'Auto',
    bags: 4,
    age: 25,
    category: 'Premium'
  },
  {
    id: 6,
    name: 'Bentley Continental',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 500,
    seats: 4,
    transmission: 'Auto',
    bags: 2,
    age: 25,
    category: 'Premium'
  }
]

export const Cars = () => {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto px-6">
        {/* Section Header - Matching Renax style */}
        <div className="text-center mb-16">
         
          <h2 className="text-[20px] lg:text-[30px] font-bold text-black">
          აირჩიე შენი მანქანა  
          </h2>
        </div>

        {/* Car Swiper - Matching Renax layout */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="!pb-16"
          >
            {luxuryCars.map((car) => (
              <SwiperSlide key={car.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Car Image - Matching Renax style */}
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge - Top left like Renax */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">
                        {car.category}
                      </span>
                    </div>
                  </div>

                  {/* Car Details Card - Matching Renax layout exactly */}
                  <div className="p-6 bg-white rounded-b-2xl">
                    {/* Car Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {car.name}
                    </h3>

                    {/* Car Specs - Matching Renax grid layout with icons */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">{car.seats} ადგილი</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">{car.transmission}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">{car.bags} ბაგი</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">წელი {car.age}</span>
                      </div>
                    </div>

                    {/* Action Row - Matching Renax button and price layout exactly */}
                    <div className="flex items-center justify-between">
                      <button className="px-6 cursor-pointer py-3 bg-[#f5b754] hover:bg-[#e6a94a] text-white font-semibold rounded-lg transition-colors duration-300">
                        დეტალები
                      </button>
                      <div className="flex text-center gap-2 items-center">
                        <p className="text-2xl font-bold text-gray-900">${car.price}</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
          <button className="swiper-button-prev absolute left-0 md:left-[600px] top-1/2 transform -translate-y-1/2 z-10 w-[55px] h-[55px] leading-[58px] bg-[#f5b754] text-[#1b1b1b] text-[10px] mx-[5px] cursor-pointer border-none transition-all duration-200 ease-in-out transform scale-100 hover:scale-110 rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-[#1b1b1b]" />
          </button>
          
          <button className="swiper-button-next absolute right-0 md:right-[600px] top-1/2 transform -translate-y-1/2 z-10 w-[55px] h-[55px] leading-[58px] bg-[#f5b754] text-[#1b1b1b] text-[10px] mx-[5px] cursor-pointer border-none transition-all duration-200 ease-in-out transform scale-100 hover:scale-110 rounded-full shadow-lg flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-[#1b1b1b]" />
          </button>

        
        </div>
      </div>
    </section>
  )
}