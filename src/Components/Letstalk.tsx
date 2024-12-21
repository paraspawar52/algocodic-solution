"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Letstalk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  // Add type for handleChange event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Add type for handleSubmit event
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const { name, email, number, message } = formData;
    if (!name || !email || !number || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      message: formData.message
    };

    emailjs.send(
      'service_yxljeos',  
      'template_fddpy8h',  
      templateParams,  
      'ZeIYO4oW4r-0ZfIK0'  
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', number: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send the message. Please try again later.');
    });
  };

  return (
    <>
      <div className='bg-gradient-to-r from-blue-300 via-blue-200 to-gray-100'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 py-[2.5rem] px-4 lg:px-0'>
          <div className='text-center lg:text-left'>
            <h2 className='text-xl lg:text-2xl mb-2'>Message Us</h2>
            <h1 className='text-2xl lg:text-3xl font-extrabold mb-2'>
              Let`s Transform your vision into reality
            </h1>
            <div className='w-full lg:w-[620px]'>
              <p className='text-sm'>{`We believe that solutions should be both powerful and need-specific. That's why our team of experienced professionals works closely with clients to understand their specific needs and create custom solutions that are tailored to their business goals`}</p>
            </div>
          </div>
          <div className='w-full lg:w-auto '>
            <div className='bg-white px-6 py-8 lg:px-10 lg:py-10 rounded-md'>
              <h1 className='text-xl lg:text-2xl text-center mb-3 font-bold font-[Inter]'>Let`s Talk</h1>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Full_Name'
                  className='w-full lg:w-[450px] border border-gray-500 text-red-600 px-3 py-2'
                />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='EMAIL_ADDRESS'
                  className='w-full lg:w-[450px] border border-gray-500 px-3 py-2'
                />
                <input
                  id="number"
                  type="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder='YOUR_NUMBER'
                  className='w-full lg:w-[450px] border border-gray-500 px-3 py-2'
                />
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='TELL US ABOUT YOUR PROJECT'
                  className='w-full lg:w-[450px] h-[150px] border border-gray-500 px-3 py-2'
                ></textarea>
                <button
                  type="submit"
                  className="border bg-black w-full lg:w-[170px] text-white border-black px-2 py-2 rounded-md hover:bg-gradient-to-r from-gray-200 via-yellow-200 to-yellow-300 hover:scale-105 transition-transform duration-300 hover:border-none"
                >
                  Send The Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Letstalk;
