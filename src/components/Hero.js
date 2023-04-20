import React from 'react';
import Img from '../img/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover py-24'>
      <div className='poppins container mx-auto flex justify-between gap-8 h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>Shop by Category
          </div><br />

          <h1 className='text-[50px] uppercase leading-[1.1] font-light mb-4'>
            Step into our world of luxury and style.<br />
            <span className='text-[20px] normal-case font-semibold'>Explore our collection of premium products and find the perfect item for you.</span>
          </h1>

          <Link
            to={'/products'}
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Discover More
          </Link>
        </div>

        <div className='flex items-center justify-center'>
          <img src={Img} className='max-w-[300px]' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
