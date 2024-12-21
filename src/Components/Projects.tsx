import Image from 'next/image';
import React from 'react'

const Projects = () => {
  return (
    <>
      <div className='bg-[#f6f6f9] py-10'>
        <div className="h-[133px] flex flex-col justify-center items-center gap-5">
          <div className="bg-[#f76680] h-1 text-center w-[100px]" />
        </div>
        <div className='pt-10 md:pt-20'>
          <h1 className='text-center text-[#1a202c] text-[24px] md:text-[35px] font-normal leading-[36px] md:leading-[55px] font-[Inter]'>
            Our recent <br className='hidden md:block' /> Case studies
          </h1>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center items-center gap-10 px-5 md:px-10 lg:px-20 mt-10'>
          <div className='w-full md:w-[600px] lg:w-[700px]'>
            <Image src="/images/case.png" alt="Case Study" width={700} height={400} layout="responsive" />
          </div>
          <div className='px-5'>
            <h1 className='text-[20px] md:text-[28px] font-semibold leading-[28px] md:leading-[38.09px] font-[Inter] mb-5 md:mb-8'>
              Website Design for SCFC Canada
            </h1>
            <p className='text-sm font-normal leading-snug font-[Inter] mb-10'>
              Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
            </p>
            
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center items-center gap-10 px-5 md:px-10 lg:px-20 mt-10'>
          <div className='w-full md:w-[600px] lg:w-[700px]'>
            <Image src="/images/Case-study__image1.png" alt="Case Study" width={700} height={400} layout="responsive" />
          </div>
          <div className='px-5'>
            <h1 className='text-[20px] md:text-[28px] font-semibold leading-[28px] md:leading-[38.09px] font-[Inter] mb-5 md:mb-8'>
              Website Design for SCFC Canada
            </h1>
            <p className='text-sm font-normal leading-snug font-[Inter] mb-10'>
              Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
            </p>
           
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center items-center gap-10 px-5 md:px-10 lg:px-20 mt-10'>
          <div className='w-full md:w-[600px] lg:w-[700px]'>
            <Image src="/images/Case-study__image2.png" alt="Case Study" width={700} height={400} layout="responsive" />
          </div>
          <div className='px-5 '>
            <h1 className='text-[20px] md:text-[28px] font-semibold leading-[28px] md:leading-[38.09px] font-[Inter] mb-5 md:mb-8'>
              Website Design for SCFC Canada
            </h1>
            <p className='text-sm font-normal leading-snug font-[Inter] mb-10'>
              Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
            </p>
            
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Projects;
