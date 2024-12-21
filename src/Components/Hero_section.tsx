import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Hero_section = () => {
  return (
    <>
      <div className="px-4 py-8 lg:px-10 lg:py-16" >
        <div className="flex justify-center items-center lg:mx-10 flex-col-reverse lg:flex-row ">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-[32px] sm:text-[45px] font-bold  leading-tight sm:leading-[71px] mb-4">
              Great <span className="text-[#dd4296] font-bold">Product</span> is <br className="hidden lg:block" />
              built by great <span className="text-[#dd4296]">teams</span>
            </h1>
            <p className="text-base sm:text-lg font-normal leading-7 sm:leading-9 font-[Inter] mb-6 sm:mb-8">
              We help build and manage a team of world-class developers to bring your vision to life.
            </p>
            <Link href="/Book_appoitment" className="text-neutral-50 text-sm font-semibold leading-[14px] font-[Inter] bg-[#152857] px-4 py-3 rounded-md">
              {`Let’s get started!`}
            </Link>
          </div>

          <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center lg:justify-end">
            <Image src="/images/hero_image.png" height={500} width={500} alt="Hero Image" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_section;
