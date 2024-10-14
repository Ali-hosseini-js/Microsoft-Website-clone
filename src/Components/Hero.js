import { FaChevronRight } from 'react-icons/fa'
import React from 'react'
import showcase from '../assets/Hero/microsoft365.jpg'

const Hero = () => {
  return (
    <div className="max-w-[1800px] mx-auto block md:flex items-center p-5 m-5">
      <div className='w-full max-h-[500px]'>
        <img className=" object-cover w-full max-h-[500px]" src={showcase} alt="hero" />
      </div>

      <div className='flex flex-col items-center md:items-start md:absolute justify-center  bg-black/40 md:bg-transparent w-full md:max-w-[600px]  max-h-[500px] md:pl-5 '>
        <h1 className="m-3 font-bold text-2xl mb-2">Microsoft 365 </h1>
        <p className="m-3 text">
          Premium Office apps, extra cloud storage, advanced security, and more - all in one convenient subscription
        </p>
        <button className="flex w-56 items-center justify-center cursor-pointer bg-black text-white hover:underline py-2 m-3">
          <span>Choose your Microsoft365 </span>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}


export default Hero;