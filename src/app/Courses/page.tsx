import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
  const courses = [
    {
      heading: "Front-End Development",
      paragraph: "Master the latest front-end technologies, frameworks, and best practices to build stunning user interfaces.",
      btn: "Enroll Now",
      image: "/images/front-end.webp",
      css: "flex"
    },
    {
      heading: "Back-End Development",
      paragraph: "Dive into server-side programming, APIs, and database management to build robust and scalable applications.",
      btn: "Enroll Now",
      image: "/images/backend.png",
      css: "flex-row-reverse"
    },
    {
      heading: "Full-Stack Development",
      paragraph: "Learn to build end-to-end web applications by mastering both front-end and back-end technologies.",
      btn: "Enroll Now",
      image: "/images/Full.png",
      css: "flex"
    },
    {
      heading: "UI/UX Design",
      paragraph: "Explore the principles of user-centered design and develop visually appealing and intuitive interfaces.",
      btn: "Enroll Now",
      image: "/images/UI.webp",
      css: "flex-row-reverse"
    },
    {
      heading: "App Development",
      paragraph: "App development involves creating software applications for mobile devices or desktops. It includes designing user interfaces, coding functionality, testing for bugs, and launching on platforms like iOS, Android, or web",
      btn: "Enroll Now",
      image: "/images/App.png",
      css: "flex"
    },
    {
      heading: "Basic Language",
      paragraph: "Learn the fundamentals of programming languages and develop a strong foundation for your web development journey.",
      btn: "Enroll Now",
      image: "/images/basiclanguage.png",
      css: "flex-row-reverse"
    },
    {
      heading: "Hartron DEO",
      paragraph: "Explore the Hartron Deo and learn how to become a skilled Data Entry Operator.",
      btn: "Enroll Now",
      image: "/images/dataentry.png",
      css: "flex"
    }
  ];

  return (
    <>
      <div className=''>
        <div className='py-10'>
          <h1 className='text-2xl md:text-5xl font-bold text-center mb-5'>Choose According To</h1>
          <p className='text-xl md:text-3xl text-center font-bold text'>Your Interest</p>
        </div>
        {
          courses.map((item) => {
            return (
              <div key={item.heading} className={`md:${item.css} flex  flex-col-reverse md:flex-row justify-center items-center gap-5 shadow-xl mb-10 mx-4 md:mx-20 py-10 px-4 md:px-10 bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 rounded-xl`}>
                <div className='w-full md:w-[50%]'>
                  <h1 className='text-2xl md:text-4xl font-bold mb-2'>{item.heading}</h1>
                  <p className='text-base md:text-lg text-gray-500 mb-6'>{item.paragraph}</p>
                  <Link href="/Book_appoitment" className='mx-[90px] md:ml-0 bg-black text-white px-4 py-3 rounded-[10px]  hover:scale-105 ease-in-out duration-300'>{item.btn}</Link>
                </div>
                <div className='w-full md:w-[50%] flex justify-center'>
                  <Image src={item.image} alt="" height={300} width={500} className="max-w-full h-auto" />
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default page;
