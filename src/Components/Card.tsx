import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <>
      <div className="px-4 py-8 lg:px-20 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-[28px] sm:text-[35px] font-normal font-[Inter] leading-[40px] sm:leading-[55px] mb-4">
              Leading companies trust us <br className="hidden lg:block" />
              <span className="text-[28px] sm:text-[35px] font-bold leading-[40px] sm:leading-[55px] font-[Inter]">
                to develop software
              </span>
            </h1>
            <p className="text-base sm:text-lg font-normal font-[Inter] leading-7 sm:leading-9 text-[#718096] mb-6">
              We{' '}
              <span className="text-[#f76680] font-normal font-[Inter] leading-7 sm:leading-9">
                add development capacity
              </span>{' '}
              to tech teams. Our value isn’t limited to building teams but is equally
              distributed across the project lifecycle. We are a custom software development
              company that guarantees the successful delivery of your project.
            </p>
            
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image src="/images/Rectangle 9.png" alt="" height={500} width={500} className="w-full max-w-[501px] h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
