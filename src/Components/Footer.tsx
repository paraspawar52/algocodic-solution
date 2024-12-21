import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='px-4 md:px-8 lg:px-16'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between gap-10 md:gap-20 py-10'>
          <div className='flex flex-col items-center md:items-start'>
            <div className='flex items-center mb-4'>
              <Image src="/images/logo.png" alt="" height={55} width={60}/>
              <h1 className=' text-base  font-medium'>AlgoCodic Solutions</h1>
            </div>
            <p className='text-center md:text-left text-lg text-[#718096] font-normal leading-[30px] font-[Inter] mb-3'>
              Lorem Ipsum is simply dummy text of the <br className='hidden md:block' /> printing and typesetting industry.
            </p>
            <Image src="/images/google.png" alt="" width={199} height={53} />
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <ul className='text-center md:text-left'>
              <li className='text-lg text-[#4a5568] font-bold font-[Inter] mb-4'>Links</li>
              {['About Us', 'Services', 'Courses',  'Careers', 'Tools'].map(link => (
                <li key={link} className='text-base text-[#718096] font-normal leading-[37.81px] font-[Poppins]'>{link}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <p className='text-lg text-[#4a5568] font-bold font-[Inter] mb-4'>Contact us</p>
            <p className='text-center md:text-left text-base text-[#718096] font-normal leading-[37.81px] font-[Poppins]'>
              Lorem Ipsum is simply dummy text <br className='hidden md:block' /> of the printing and typesetting <br className='hidden md:block' /> industry.
            </p>
            <p className='text-base text-[#718096] font-normal leading-[37.81px] font-[Poppins]'>+923183561921</p>
          </div>
          <div className='flex justify-center md:justify-start items-end'>
            <div className='flex items-center gap-4'>
              <Image src="/images/facebook.svg" alt="" height={15} width={16} />
            <a href="https://www.instagram.com/mohit_duaa11/">  <Image src="/images/instagram.svg" alt="" height={15} width={16} /></a>
              <Image src="/images/twitter.svg" alt="" height={15} width={16} />
             <a href="https://www.linkedin.com/in/mohit-dua-a75849247/"> <Image src="/images/linkedin.svg" alt="" height={15} width={16} /></a>
            </div>
          </div>
        </div>
        <div className='bg-black h-[1px] w-full'/>
        <div className='py-5'>
          <p className='text-[13px] md:text-sm font-normal  md:leading-[10px] font-[Inter] text-center'>
            © 2024 Copyright by AlgoCodic Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
