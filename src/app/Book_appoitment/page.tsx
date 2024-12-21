"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const BudgetContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    mobile: '',
    qualification: '',
    date: '',
    time: '',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      mobile: formData.mobile,
      qualification: formData.qualification,
      date: formData.date,
      time: formData.time,
      comments: formData.comments,
    };

    emailjs.send(
      'service_yxljeos',      
      'template_fddpy8h',     
      templateParams,        
      'ZeIYO4oW4r-0ZfIK0'       
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your form has been submitted successfully!');
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send the email. Please try again later.');
    });
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-[30%] h-auto lg:h-[800px] bg-black px-5 py-10 flex flex-col justify-start items-center'>
          <div className='flex items-center gap-2 mb-10 lg:mb-[120px]'>
            <Image src="/images/logoo.png" alt="logo" height={65} width={70} />
            <h1 className='text-xl lg:text-2xl font-medium text-white'>AlgoCodic Solutions</h1>
          </div>
          <div className='text-center lg:text-left'>
            <h1 className='text-lg md:text-xl lg:text-2xl mb-4 text-white'>
              We are here to make your business grow
            </h1>
            <p className='text-sm md:text-lg lg:text-xl text-white'>
              Enhance your business with our smart digital solutions, which will make your business better stand out.
            </p>
          </div>
        </div>

        <div className='w-full lg:w-[70%] h-auto lg:h-[800px] bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100 flex justify-center'>
          <form onSubmit={handleSubmit} className='px-4 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 rounded-md w-full max-w-[90%] lg:max-w-none'>
            <h1 className='text-lg md:text-xl lg:text-2xl mb-3 font-bold'>Book IT Services</h1>
            <p className='mb-2'>Schedule a consultation for your IT needs.</p>
            
            <div className="bg-white p-4 md:p-6 lg:px-10 lg:py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className='font-semibold'>Name</label>
                  <input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="border border-black px-2 py-1 md:py-2" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className='font-semibold'>Email</label>
                  <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="border border-black px-2 py-1 md:py-2" required />
                </div>
              </div>

              <div className="flex flex-col mb-2">
                <label className='font-semibold'>Service</label>
                <select id="service" value={formData.service} onChange={handleChange} className="border border-black px-2 py-1 md:py-2" required>
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>Mobile Apps</option>
                  <option>Data Science</option>
                  <option>Machine Learning</option>
                  <option>Robotics</option>
                  <option>Data Engineering</option>
                  <option>Software Testing</option>
                </select>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
                <div className='flex flex-col'>
                  <label className='font-semibold'>Mobile No</label>
                  <input id="mobile" type="number" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile no" className="border border-black px-2 py-1 md:py-2" required />
                </div>
                <div className='flex flex-col'>
                  <label className='font-semibold'>Qualification</label>
                  <input id="qualification" type="text" value={formData.qualification} onChange={handleChange} placeholder="Your Qualification" className="border border-black px-2 py-1 md:py-2" required />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
                <div className='flex flex-col'>
                  <label className='font-semibold'>Date</label>
                  <input id="date" type="date" value={formData.date} onChange={handleChange} className="border border-black px-2 py-1 md:py-2" required />
                </div>
                <div className='flex flex-col'>
                  <label className='font-semibold'>Time</label>
                  <select id="time" value={formData.time} onChange={handleChange} className="border border-black px-2 py-1 md:py-2" required>
                    <option>Select Time</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="comments" className='font-semibold'>Additional Comments</label>
                <textarea id="comments" value={formData.comments} onChange={handleChange} placeholder='Provide any additional details' className='border border-black h-[100px] px-2 py-1 md:py-2'></textarea>
              </div>

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BudgetContact;
