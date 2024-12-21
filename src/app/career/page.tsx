import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const courses = [
        { courses: "Web Development" },
        { courses: "Mobile Apps" },
        { courses: "Data Science" },
        { courses: "Machine Learning" },
        { courses: "Robotics" },
        { courses: "Data Engineering" },
        { courses: "Software Testing" }
    ];

    const career = [
        {
            heading: "Web Development",
            para: "Explore the world of web development, from front-end to back-end, and learn how to build dynamic and responsive websites.",
            logo: "/images/code.png",
            link: "Learn More"
        },
        {
            heading: "Mobile App Development",
            para: "Discover the world of mobile app development, from iOS to Android, and learn how to create engaging and user-friendly mobile applications.",
            logo: "/images/mobile.svg",
            link: "Learn More"
        },
        {
            heading: "Data Science",
            para: "Explore the world of data science, from data collection to analysis, and learn how to extract valuable insights from complex datasets.",
            logo: "/images/data.png",
            link: "Learn More"
        },
        {
            heading: "Machine Learning",
            para: "Discover the world of machine learning, from supervised to unsupervised learning, and learn how to build intelligent systems that can learn and adapt.",
            logo: "/images/machine.svg",
            link: "Learn More"
        },
        {
            heading: "Robotics",
            para: "Explore the world of robotics, from hardware to software, and learn how to design, build, and program intelligent machines that can interact with the physical world.",
            logo: "/images/robot.svg",
            link: "Learn More"
        },
        {
            heading: "Data Engineering",
            para: "Discover the world of data engineering, from data pipelines to data warehousing, and learn how to build scalable and efficient data systems.",
            logo: "/images/dataEngenering.png",
            link: "Learn More"
        },
        {
            heading: "Software Testing",
            para: "Explore the world of software testing, from manual to automated testing, and learn how to ensure the quality and reliability of software applications.",
            logo: "/images/machine.svg",
            link: "Learn More"
        }
    ];

    return (
        <>
            <div className='p-5'>
                <div className='flex flex-col lg:flex-row justify-center items-start lg:gap-20'>
                    <div className='mt-10'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>Counseling for the IT Sector</h1>
                        <p className='text-sm md:text-lg lg:text-xl text-gray-500 mb-2'>
                            Explore the diverse domains of the IT industry and discover <br /> the right career path for you.
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                            {courses.map((item) => (
                                <button
                                    key={item.courses}
                                    className='bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 rounded-md text-black font-bold py-2 hover:scale-110 transition ease-in-out duration-300'
                                >
                                    {item.courses}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-0'>
                        <Image src="/images/carrer.jpg" alt="Career" width={500} height={400} className='w-full h-auto' />
                        <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold mt-2 mb-4'>Connect with an IT Counselor</h1>
                        <p className='text-sm md:text-base lg:text-sm text-gray-500 mb-4'>
                            Our experienced counselors are here to guide you through the diverse <br /> IT landscape and help you find the right career path.
                        </p>
                        <Link href="./Book_appoitment" className='bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 rounded-md text-black font-bold px-4 py-2 hover:scale-110 transition ease-in-out duration-300'>
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                    {career.map((item) => (
                        <div key={item.heading} className='flex gap-4 items-center shadow-md px-4 py-6'>
                            <div className=''>
                                <Image src={item.logo} alt={item.heading} height={35} width={35} />
                            </div>
                            <div className=''>
                                <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>{item.heading}</h1>
                                <div className='w-[200px] sm:w-[250px] md:w-[300px]'>
                                    <p className='text-xs md:text-sm lg:text-base mb-2 text-gray-500 font-medium'>{item.para}</p>
                                    <Link href="/LearnMore" className='bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 font-bold px-2 py-1 rounded-md'>
                                        {item.link}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default page
