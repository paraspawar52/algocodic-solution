import Image from 'next/image'
import React from 'react'

const Great_software = () => {
  return (
    <>
      <div className='px-4 md:px-8 lg:px-16'>
        <div className='flex flex-col-reverse justify-center items-center pt-10'>
          <div className='bg-[#57007B] h-[4px] w-[20%] md:w-[10%]' />
          <p className='text-[24px] md:text-[30px] lg:text-[35px] text-[#1a202c] font-normal leading-[36px] md:leading-[45px] lg:leading-[55px] font-[Inter] text-center'>
            Way of building
          </p>
          <h1 className='text-[24px] md:text-[30px] lg:text-[35px] text-[#1a202c] font-semibold leading-[36px] md:leading-[45px] lg:leading-[55px] font-[Inter] text-center'>
            Great Software
          </h1>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-10 py-10'>
          <div className='flex-1 md:w-1/2'>
            <h1 className='text-[20px] md:text-[28px] font-semibold leading-[28px] md:leading-[38.09px] font-[Inter] mb-4 md:mb-8'>
              Build the right team to scale
            </h1>
            <p className='text-base md:text-lg text-[#2d3748] font-normal leading-[24px] md:leading-[30px] font-[Inter] mb-4'>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className='text-base md:text-lg text-[#2d3748] font-normal leading-[24px] md:leading-[30px] font-[Inter] mb-4'>
              Our{' '}
              <span className='text-[#f76680]'>delivery model</span> helps you
              cut costs and deliver within budget.
            </p>
            <p className='text-base md:text-base font-light font-[Inter] leading-[24px] md:leading-[30px] text-[#f76680] mb-4'>
              Simform is quick to identify larger problems with the Software,
              so we decided to expand our scope to build new modules.
            </p>
            <div className='flex items-center gap-2'>
              <Image src="/images/Ellipse 185.svg" alt="" width={41} height={41} />
              <div>
                <h1 className='text-base font-normal font-[Inter]'>Jeewa Markram</h1>
                <p className='text-[13px] text-[#718096] font-normal font-[Inter]'>
                  CEO
                </p>
              </div>
            </div>
          </div>
          <div className='w-[100%] md:w-1/2'>
            <Image src="/images/Rectangle 17.png" alt="" width={500} height={350}  />
          </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-6 md:gap-10 py-10'>
          <div className='flex-1 md:w-1/2'>
            <h1 className='text-[20px] md:text-[28px] font-semibold leading-[28px] md:leading-[38.09px] font-[Inter] mb-4 md:mb-8'>
              Build the right team to scale
            </h1>
            <p className='text-base md:text-lg text-[#2d3748] font-normal leading-[24px] md:leading-[30px] font-[Inter] mb-4'>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className='text-base md:text-lg text-[#2d3748] font-normal leading-[24px] md:leading-[30px] font-[Inter] mb-4'>
              Our{' '}
              <span className='text-[#f76680]'>delivery model</span> helps you
              cut costs and deliver within budget.
            </p>
            <p className='text-base md:text-base font-light font-[Inter] leading-[24px] md:leading-[30px] text-[#f76680] mb-4'>
              Simform is quick to identify larger problems with the Software,
              so we decided to expand our scope to build new modules.
            </p>
            <div className='flex items-center gap-2'>
              <Image src="/images/Ellipse 185.svg" alt="" width={41} height={41} />
              <div>
                <h1 className='text-base font-normal font-[Inter]'>Jeewa Markram</h1>
                <p className='text-[13px] text-[#718096] font-normal font-[Inter]'>
                  CEO
                </p>
              </div>
            </div>
          </div>
          <div className='w-[100%] md:w-1/2'>
            <Image src="/images/Rectangle 18.png" alt="" width={500} height={350} />
          </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-10 py-10'>
          <div className='flex-1 md:w-1/2'>
            <h1 className='text-[20px] md:text-[28px] font-semibold leading-[28px] md:leading-[38.09px] font-[Inter] mb-4 md:mb-8'>
              Build the right team to scale
            </h1>
            <p className='text-base md:text-lg text-[#2d3748] font-normal leading-[24px] md:leading-[30px] font-[Inter] mb-4'>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className='text-base md:text-lg text-[#2d3748] font-normal leading-[24px] md:leading-[30px] font-[Inter] mb-4'>
              Our{' '}
              <span className='text-[#f76680]'>delivery model</span> helps you
              cut costs and deliver within budget.
            </p>
            <p className='text-base md:text-base font-light font-[Inter] leading-[24px] md:leading-[30px] text-[#f76680] mb-4'>
              Simform is quick to identify larger problems with the Software,
              so we decided to expand our scope to build new modules.
            </p>
            <div className='flex items-center gap-2'>
              <Image src="/images/Ellipse 185.svg" alt="" width={41} height={41} />
              <div>
                <h1 className='text-base font-normal font-[Inter]'>Jeewa Markram</h1>
                <p className='text-[13px] text-[#718096] font-normal font-[Inter]'>
                  CEO
                </p>
              </div>
            </div>
          </div>
          <div className='w-[100%] md:w-1/2'>
            <Image src="/images/Rectangle 19.png" alt="" width={500} height={350}  />
          </div>
        </div>
      </div>
    </>
  )
}

export default Great_software
