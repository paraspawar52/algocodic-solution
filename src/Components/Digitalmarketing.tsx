import Image from 'next/image'
import React from 'react'
import Letstalk from './Letstalk'

const WebDevelopment = () => {
  const Services = [
    {
      counting: "1",
      heading: "Define your target audience",
      paragraph: "The first step in digital marketing is to identify and understand your target audience. This involves researching their demographics, behaviors, and interests to create a clear picture of who your ideal customer is."
    },
    {
      counting: "2",
      heading: "Develop a digital marketing strategy",
      paragraph: "Based on your target audience and business goals, a digital marketing strategy is developed. This includes choosing the right digital channels (such as social media, email, or search engines) and tactics (such as advertising, content marketing, or SEO) to reach your target audience and achieve your marketing goals."
    },
    {
      counting: "3",
      heading: "Create compelling content",
      paragraph: "Creating high-quality content is an essential part of digital marketing. This includes creating blog posts, social media updates, videos, infographics, and other types of content that will resonate with your target audience and drive engagement."
    },
    {
      counting: "4",
      heading: "Optimize your website",
      paragraph: "Your website is the foundation of your digital marketing efforts. It is important to ensure that your website is optimized for search engines, has a user-friendly design, and provides a positive user experience."
    },
    {
      counting: "5",
      heading: "Implement digital marketing campaigns",
      paragraph: "Once your strategy is in place, it's time to implement digital marketing campaigns. This includes creating and launching ads, social media posts, email campaigns, and other types of content designed to reach and engage your target audience."
    },
    {
      counting: "6",
      heading: "Monitor and measure results",
      paragraph: "To ensure that your digital marketing efforts are effective, it's important to monitor and measure the results of your campaigns. This includes tracking website traffic, social media engagement, email open rates, and other metrics to determine what is working and what needs improvement. "
    }
  ]
  const Featured = [
    {
      image: "/images/check-solid.svg",
      heading: "Targeted audience",
      paragraph: "With digital marketing, it is possible to target specific groups of people based on demographics, interests, behavior, and more. This means that businesses can reach the people who are most likely to be interested in their products or services, making their marketing efforts more efficient and effective."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Measurable results",
      paragraph: "Unlike traditional marketing methods, digital marketing allows businesses to track and measure their results in real-time. This means that they can see exactly how many people are engaging with their content, how many leads and sales are being generated, and how much revenue is being generated from their campaigns."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Flexibility and adaptability",
      paragraph: "Digital marketing is highly flexible and adaptable, allowing businesses to make changes to their campaigns in real-time based on their results. This means that they can quickly and easily make adjustments to their strategy to improve their results and respond to changes in the market."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Cost Effectiveness",
      paragraph: "Digital marketing can be much more cost-effective than traditional marketing methods, as it is often less expensive to reach large numbers of people online than it is through print, radio, or television advertising."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Personalization",
      paragraph: "Digital marketing allows businesses to personalize their marketing efforts, tailoring their messages and offers to the specific needs and preferences of their target audience. This can help to increase engagement and build stronger relationships with customers."
    },
    {
      image: "/images/check-solid.svg",
      heading: "Multiple channels",
      paragraph: "Marketing offers a range of channels that businesses can use to reach their target audience, including search engines, social media, email, mobile apps, and more. This means that businesses can reach their customers wherever they are online, increasing the likelihood of engagement and conversions."
    }
  ]
  return (
    <>
      <div>
        <div className='flex flex-col gap-8 justify-center items-center min-h-[70vh] bg-gradient-to-r from-yellow-300 via-yellow-200 to-gray-100 px-4 md:px-8'>
          <div>
            <h1 className='text-4xl md:text-6xl font-bold  mt-[4rem] text-center'>Digital Marketing</h1>
          </div>
          <div className='w-full lg:w-[800px]'>
            <p className='text-sm md:text-base text-center'>We can help you connect with your target audience by creating effective marketing strategies that increase brand awareness and drive conversions. Our team uses market research, analytics, and consumer behavior insights to create targeted campaigns that resonate with your audience.</p>
          </div>
          <button className="border border-black px-4 py-2 rounded-md hover:bg-gradient-to-r from-yellow-300 via-yellow-200 to-gray-200 hover:scale-125 transition-transform duration-300 hover:border-none">
            <p>Let`s Start</p>
          </button>
        </div>
        <div className='px-4 md:px-16 lg:px-20 py-10 md:py-20'>
          <h2 className='text-lg md:text-xl font-[Inter] mb-2'>Digital Marketing Process</h2>
          <h1 className='text-2xl md:text-3xl font-bold mb-3'>Take your business to the next level with our digital marketing expertise</h1>
          <p className='text-sm md:text-base'>Let our team of seasoned digital marketing professionals be your strategic partner in achieving your business goals by leveraging our expertise, creativity, and innovation to deliver measurable results and sustained growth.</p>
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
        <div className='flex py-10 md:py-20 flex-wrap justify-start gap-4 px-5'>
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
        <Letstalk />
      </div>
    </>
  )
}

export default WebDevelopment
