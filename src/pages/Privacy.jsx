import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom';
function Privacy() {
  const [display,setdisplay]=useState(false);
  const [display1,setdisplay1]=useState(false);
  const [display2,setdisplay2]=useState(false);
  const [display3,setdisplay3]=useState(false);
  return (

    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Privacy Policy
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                    This privacy policy applies to your use of our website, "InstaCare". 
          We are committed to protecting your privacy and the confidentiality 
          of your personal information. This Policy describes how we collect,
          use, disclose, and secure your personal information when you visit
          our website and use our services.

          </p>
        </div>




        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              onClick={()=>{setdisplay1(!display1)}}
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">Information We Collect?</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display1?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <p className="text-gray-500">
              Personal Information: This includes information that can be used 
              to identify you, such as your name, email address, phone number, 
              and mailing address. We only collect personal information that you
              voluntarily provide to us, such as when you register for an account,
              contact us through a form, or subscribe to our newsletter.

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
              <span className="flex text-lg font-semibold text-black">How We Use Your Information?</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <div className="text-gray-500">
            <ul className='list-disc text-justify m-2'>
            <li>We use your information for the following purposes:</li>
            <li>To operate and maintain our Website;</li>
            <li>To provide you with the services and information you request;</li>
            <li>To personalize your experience on our Website;</li>
            <li>To communicate with you about our services and offerings;</li>
            <li>To improve our Website and services;</li>
             <li>For compliance with legal and regulatory requirements.</li>
            </ul>
              </div>
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
              <span className="flex text-lg font-semibold text-black">Information Sharing</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display3?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <div className="text-gray-500 ">
              <ul className='list-disc  text-justify m-2'> 
              <li >We will not share your personal information with third parties
              without your consent, except in the following cases:</li>
              <li>To service providers who help us operate our Website and provide services to you;</li>
              <li>To comply with legal or regulatory requirements;</li>
              <li >To protect our rights and interests.</li>
              </ul>
              </div>
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


export default Privacy