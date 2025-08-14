"use client"
import { useRef } from 'react';
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <div className="relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <div className="relative h-full">
                        <img src="	https://carrent.aanwebsolutions.com/demo/imgs/car5.webp" alt="Luxury Car" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                    </div>

                </div>
                <div className="relative max-w-7xl mt-34 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white text-center md:text-left">
                            <h1 className=" text-[20px] md:text-[30px] font-bold leading-2xl mb-6">
                                იპოვე და დაჯავშნე
                                <span className="block">შენი იდეალური ავტომობილი სწრაფად და მარტივად</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-lg">აღმოაჩინეთ ჩვენი პრემიუმ კლასის ავტოპარკი და ისიამოვნეთ შეუდარებელი კომფორტითა და სტილით თქვენს მოგზაურობაში
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/cars" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-[20px] hover:bg-white hover:text-black transition text-center">
                                    ჩვენი მანქანები
                                </Link>

                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <h2 className="text-[20px] font-bold text-white mb-6">სწრაფი დაჯავშნა</h2>
                            <form className="space-y-6">
                                <div className='text-white'>
                                    <label className="block text-[18px] font-medium text-white mb-2">აირჩიეთ მანქანა</label>
                                    <select className="w-full  bg-white/20 border border-white/20 rounded-xl px-4 py-3  ">

                                        <option className='bg-black/60 '>Mercedes S-Class</option>
                                        <option className='bg-black/60 '>BMW 7 Series</option>
                                        <option className='bg-black/60 '>Audi A8</option>
                                        <option className='bg-black/60 '>Tesla Model S</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[18px] font-medium text-white mb-2">წაყვანის თარიღი</label>
                                        <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white " />
                                    </div>
                                    <div>
                                        <label className="block text-[18px] font-medium text-white mb-2">დაბრუნების თარიღი</label>
                                        <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white " />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[18px] font-medium text-white mb-2">ქალაქი</label>
                                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white ">
                                      
                                        <option className='bg-black/60 '>თბილისი</option>
                                        <option className='bg-black/60 '>ბათუმი</option>
                                        <option className='bg-black/60 '>ქუთაისი</option>

                                    </select>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-[#f5b754] hover:bg-[#e6a94a] text-white text-[18px] md:text-[20px] font-semibold rounded-lg transition-colors duration-300 w-full md:w-[50%]"
                                    >
                                        მოძებნე
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}