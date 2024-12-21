import Letstalk from '@/Components/Letstalk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WebDevelopment = () => {
  const Services = [
    {
      counting: "1",
      heading: "Planning and Research",
      paragraph: "The first step in creating a website is to identify the purpose of the site and the target audience. This involves conducting research on the industry, competition, and user behavior to inform the site's design and functionality."
    },
    {
      counting: "2",
      heading: "Design",
      paragraph: "Once the planning and research is done, the design phase begins. The design of the site involves the creation of the site layout, including the user interface, navigation, and visual elements such as colors, fonts, and imagery."
    },
    {
      counting: "3",
      heading: "Content Creation",
      paragraph: "After the design is finalized, the content creation phase begins. This involves writing copy and creating multimedia content, such as images and videos, to populate the site."
    },
    {
      counting: "4",
      heading: "Development",
      paragraph: "Once the content is ready, the website development phase begins. This involves coding the website using various programming languages such as HTML, CSS, and JavaScript. During this phase, the website is made functional and interactive, including the creation of any backend systems required to support the site's functionality."
    },
    {
      counting: "5",
      heading: "Testing",
      paragraph: "Once the website is developed, it undergoes extensive testing to ensure that all functions and features work correctly and that it is responsive across all devices and browsers."
    },
    {
      counting: "6",
      heading: "Launch",
      paragraph: "After testing is complete, the site is ready to be launched. This involves uploading the site to the hosting server and configuring it to be accessible to users on the internet."
    }
  ]
  const Featured = [
    {
      image: "/images/check-solid.svg",
      heading: "Custom Website Design",
      paragraph: "We create custom designs tailored to your needs, including layout, colors, and branding."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Responsive Design",
      paragraph: "We create websites that are optimized for different devices, including desktops, tablets, and mobile phones."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Content Management Systems",
      paragraph: "We can integrate a CMS into a website, allowing clients to easily update and manage their site's content."
    },
    {
      image: "/images/check-solid.svg",
      heading: "E-commerce Solutions",
      paragraph: "We can create online stores with features such as product catalogs, shopping carts, and payment processing."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Web Hosting",
      paragraph: "We can provide web hosting services, including domain registration, server management, and security."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Maintenance and Support",
      paragraph: "We can provide ongoing maintenance and support services, such as software updates, bug fixes, and technical support."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Analytics and Reporting",
      paragraph: "We can set up analytics and reporting tools to track a website's performance and provide insights into user behavior and traffic."
    }
  ]
  return (
    <>
      <div>
        <div className='flex flex-col gap-8 justify-center items-center min-h-[70vh] bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 px-4 md:px-8'>
          <div>
            <h1 className='text-4xl md:text-6xl font-bold font-[Inter] mt-[4rem] text-center'>Web Development</h1>
          </div>
          <div className='w-full lg:w-[800px]'>
            <p className='text-sm md:text-base text-center'>Our cutting-edge web solutions are expertly crafted with the latest technology and industry best practices to meet the ever-evolving demands of modern businesses. From dynamic and responsive website design to seamless e-commerce integration and intuitive user experience, we offer a comprehensive suite of innovative web solutions that are tailored to your business needs and goals.</p>
          </div>
          <Link href="/Budget_contact" className="border border-black px-4 py-2 rounded-md hover:bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 hover:scale-125 transition-transform duration-300 hover:border-none">
            Let`s Start
          </Link>
        </div>
        <div className='px-4 md:px-16 lg:px-20 py-10 md:py-20'>
          <h2 className='text-lg md:text-xl font-[Inter] mb-2'>Web Development Process</h2>
          <h1 className='text-2xl md:text-3xl font-bold mb-3'>Get your website developed by our professionals</h1>
          <p className='text-sm md:text-base'>With some of the brightest minds at our disposal, your website can be customized from something as simple as a page of plain text to the most complex website with the latest features and incorporating the latest technologies – and you do not need an army of coders and website development gurus to build that out for you.</p>
        </div>
        <div className='flex pb-10 md:pb-20 flex-wrap justify-center gap-4 px-5'>
          {
            Services.map((item) => {
              return (
                <div key={item.counting} className='px-4 py-4 shadow border w-full md:w-[350px] lg:w-[400px]' style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                  <p className='text-3xl md:text-4xl font-bold text-gray-800'>{item.counting}</p>
                  <h1 className='text-xl md:text-2xl font-bold'>{item.heading}</h1>
                  <div>
                    <p className='text-sm'>{item.paragraph}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl font-extrabold mb-4'>Features Offered</h1>
          <p className='text-sm md:text-base'>Allow us to provide you with a professional and thorough explanation of the subject matter, leaving no stone unturned and ensuring a complete understanding.</p>
        </div>
        <div className='flex py-10 md:py-20 flex-wrap justify-start gap-4 px-5 md:px-[68px]'>
          {
            Featured.map((item) => {
              return (
                <div key={item.heading} className='px-4 py-10 shadow border w-full md:w-[350px] lg:w-[400px]' style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                  <Image src={item.image} alt="" height={42} width={42} className='mx-auto bg-gray-600 px-2 py-2 rounded-full mb-4' />
                  <h1 className='text-xl md:text-2xl text-center font-bold mb-2'>{item.heading}</h1>
                  <div>
                    <p className='text-sm text-center'>{item.paragraph}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Letstalk/>
      </div>
    </>
  )
}

export default WebDevelopment
