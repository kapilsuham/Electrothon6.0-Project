import React from 'react'
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom';

function Features() {
  const [display,setdisplay]=useState(false);
  const [display1,setdisplay1]=useState(false);
  const [display2,setdisplay2]=useState(false);
  const [display3,setdisplay3]=useState(false);
  return (

    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Features We Provide
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            First Time In NIT-H <br />
            Health Management Initiative
          </p>
        </div>




        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              onClick={()=>{setdisplay1(!display1)}}
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">How do I get started?</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display1?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <p className="text-gray-500">
                Firstly visit our home page and go to the signup section and creat your new account and get started
              </p>
            </div>
          </div>
        
          
        </div>






        


        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              onClick={()=>{setdisplay(!display)}}
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">Now Mainting Health And Regular Checkups Becoms Easy</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <p className="text-gray-500">
              Live Responding chat with your doctor or health mentor at any time any where 24X7 available
              </p>
            </div>
          </div>
        
          
        </div>



        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              onClick={()=>{setdisplay3(!display3)}}
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">Online Consult at a glance</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display3?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <p className="text-gray-500">
              No longer do patients have to endure long waits in crowded waiting rooms or spend Time traveling to a healthcare facility.
              enable doctors to access patients' medical histories and make informed decisions about their care
              </p>
            </div>
          </div>
        
          
        </div>

















        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <Link className='underline font-bold' to="/contactus">
            Contact our support
            </Link>
        </p>
      </div>
    </section>
  )
}

export default Features