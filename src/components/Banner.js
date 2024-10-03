import React from 'react';

import Image from "../assets/img/house-banner.png"

import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24' >
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135] flex flex-col item-center lg:item-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-'>
          <span className='text-violet-700'> Rent </span> Your Dream House With Us.
        </h1>
        <p className='max-w-[480px] mb-8 mt-3 '>
        Discover your dream home with ease through our rental platform, designed to offer a seamless house-hunting experience. Explore a wide range of properties, complete with detailed listings and user-friendly search tools. Whether you're looking for a cozy apartment or a spacious family house, we help you find the perfect match. Start your journey to renting the perfect home today!
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
      <img src={Image} alt='' /> 
      </div>
      
    </div>
    <Search />
  </section>;
};

export default Banner;
