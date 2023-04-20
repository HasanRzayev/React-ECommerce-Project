import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import Register from './Register';
import NavBar from './NavBar';
import UserProfile from './UserProfile';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const storedEmail = localStorage.getItem('email');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
        } fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        <div className='flex gap-10 items-center h-full'>
          <div>
            <Link to={'/'}>
              <img className='w-[70px]' src={Logo} alt='' />
            </Link>
          </div>

          <NavBar></NavBar>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>

        {storedEmail === null ? <Register></Register> : <UserProfile></UserProfile>}
      </div>
    </header>
  );
};

export default Header;
