import Image from 'next/image'
import React from 'react'

const Development_approach = () => {
  return (
    <>
      <div className='px-4 md:px-8 lg:px-16'>
        {/* Header */}
        <div className='flex flex-col justify-center items-center py-10'>
          <div className='bg-[#57007B] h-[4px] w-[20%] md:w-[10%]' />
          <p className='text-[24px] md:text-[30px] lg:text-[35px] text-[#1a202c] font-normal leading-[36px] md:leading-[45px] lg:leading-[55px] font-[Inter] text-center'>
            Our design and
          </p>
          <h1 className='text-[24px] md:text-[30px] lg:text-[35px] text-[#1a202c] font-semibold leading-[36px] md:leading-[45px] lg:leading-[55px] font-[Inter] text-center'>
            development approach
          </h1>
        </div>

        {/* Approach Cards */}
        <div className='flex flex-col gap-6 md:gap-10'>
          {/* First Row */}
          <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-10 py-2'>
            <div className='flex flex-1 gap-5 shadow-md px-4 py-6 border border-[#e7daec]'>
              <div className='bg-[#1a202c] h-[40px] w-[40px] flex items-center justify-center rounded-md'>
                <Image src="/images/Rocket.png" alt="" height={35} width={35} />
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-semibold font-[Inter] leading-6 md:leading-7'>
                  UX Driven Engineering
                </h1>
                <p className='text-sm md:text-base font-normal font-[Inter] leading-snug text-[#4a5568]'>
                  Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.
                </p>
              </div>
            </div>
            <div className='flex flex-1 gap-5 shadow-md px-4 py-6 border border-[#e7daec]'>
              <div className='bg-[#68dbf2] h-[40px] w-[40px] flex items-center justify-center rounded-md'>
                <Image src="/images/Code.png" alt="" height={35} width={35} />
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-semibold font-[Inter] leading-6 md:leading-7'>
                  Developing Shared Understanding
                </h1>
                <p className='text-sm md:text-base font-normal font-[Inter] leading-snug text-[#4a5568]'>
                  Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-10 py-2'>
            <div className='flex flex-1 gap-5 shadow-md px-4 py-6 border border-[#e7daec]'>
              <div className='bg-[#ff92ae] h-[40px] w-[40px] flex items-center justify-center rounded-md'>
                <Image src="/images/Heart.png" alt="" height={35} width={35} />
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-semibold font-[Inter] leading-6 md:leading-7'>
                  Proven Experience and Expertise
                </h1>
                <p className='text-sm md:text-base font-normal font-[Inter] leading-snug text-[#4a5568]'>
                  Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.
                </p>
              </div>
            </div>
            <div className='flex flex-1 gap-5 shadow-md px-4 py-6 border border-[#e7daec]'>
              <div className='bg-[#66e8f1] h-[40px] w-[40px] flex items-center justify-center rounded-md'>
                <Image src="/images/Shield.png" alt="" height={35} width={35} />
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-semibold font-[Inter] leading-6 md:leading-7'>
                  Security & Intellectual Property (IP)
                </h1>
                <p className='text-sm md:text-base font-normal font-[Inter] leading-snug text-[#4a5568]'>
                  Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-10 py-2'>
            <div className='flex flex-1 gap-5 shadow-md px-4 py-6 border border-[#e7daec]'>
              <div className='bg-[#ffee5d] h-[40px] w-[40px] flex items-center justify-center rounded-md'>
                <Image src="/images/Success.png" alt="" height={35} width={35} />
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-semibold font-[Inter] leading-6 md:leading-7'>
                  Code Reviews
                </h1>
                <p className='text-sm md:text-base font-normal font-[Inter] leading-snug text-[#4a5568]'>
                  Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.
                </p>
              </div>
            </div>
            <div className='flex flex-1 gap-5 shadow-md px-4 py-6 border border-[#e7daec]'>
              <div className='bg-[#f76680] h-[40px] w-[40px] flex items-center justify-center rounded-md'>
                <Image src="/images/Padlock.png" alt="" height={35} width={35} />
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-semibold font-[Inter] leading-6 md:leading-7'>
                  Quality Assurance & Testing
                </h1>
                <p className='text-sm md:text-base font-normal font-[Inter] leading-snug text-[#4a5568]'>
                  Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Development_approach
