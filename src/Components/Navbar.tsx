"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Disable scrolling when the mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <>
      <div className='sticky top-0 z-50 bg-white shadow-md flex justify-between items-center px-6 py-2 md:px-10'>
        <div className='flex items-center gap-2 whitespace-nowrap'>
          <Image src="/images/logo.png" alt="logo" height={65} width={70} />
          <h1 className='md:text-2xl font-medium'>AlgoCodic Solutionnnnnnnnnnnnnnnnn</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className='text-2xl cursor-pointer' />
          ) : (
            <FaBars className='text-2xl cursor-pointer' />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-8`}>
          <li>
            <Link href="/" className='text-base font-medium leading-[25px] hover:text-blue-300'>Home</Link>
          </li>
          <li className='relative group'>
            <span className='text-base font-medium leading-[25px] cursor-pointer hover:text-blue-300'>Services</span>
            <ul className='absolute hidden group-hover:block bg-gray-500 shadow-lg p-2 space-y-2'>
              <li><Link href="/services" className='block w-[180px] px-4 py-1 text-black hover:text-blue-300'>Web Development</Link></li>
              <li><Link href="/Digital_markting" className='block px-4 py-1 text-black hover:text-blue-300'>Digital Marketing</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/Courses" className='text-base font-medium leading-[25px] hover:text-blue-300'>Courses</Link>
          </li>
          <li>
            <Link href="/career" className='text-base font-medium leading-[25px] hover:text-blue-300'>Career</Link>
          </li>
          <li>
            <Link href="/Tools" className='text-base font-medium leading-[25px] hover:text-blue-300'>Tools</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-full bg-gray-500 shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col items-center space-y-6 py-10  text-center'>
            <Link href="/" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px] text-white hover:text-blue-300'>Home</Link>
            <li className='relative'>
              <span onClick={toggleServicesDropdown} className='text-base font-medium leading-[25px] cursor-pointer text-white hover:text-blue-300'>Services</span>
              {isServicesDropdownOpen && (
                <ul className='bg-gray-500 shadow-lg p-2 space-y-2 mt-2'>
                  <li><Link href="/services" onClick={toggleMobileMenu} className='block w-[180px] px-4 py-1 text-black hover:text-blue-300'>Web Development</Link></li>
                  <li><Link href="/Digital_markting" onClick={toggleMobileMenu} className='block px-4 py-1 text-black hover:text-blue-300'>Digital Marketing</Link></li>
                </ul>
              )}
            </li>
            <Link href="/Courses" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px] text-white hover:text-blue-300'>Courses</Link>
            <Link href="/career" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px] text-white hover:text-blue-300'>Career</Link>
            <Link href="/Tools" onClick={toggleMobileMenu} className='text-base font-medium leading-[25px] text-white hover:text-blue-300'>Tools</Link>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className='hidden md:block bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 px-4 py-1 rounded-sm border border-black'>
          <Link href="/Book_appoitment"  className='text-sm font-semibold leading-[14px] hover:text-blue-300'>Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
