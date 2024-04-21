import React from 'react'
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'


function Terms() {
  const [display,setdisplay]=useState(false);
  const [display1,setdisplay1]=useState(false);
  const [display2,setdisplay2]=useState(false);
  const [display3,setdisplay3]=useState(false);
  return (

    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Terms & Conditions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
          Welcome to InstaCare. These terms and conditions 
          govern your use of the Website. By accessing or using the 
          Website, you agree to be bound by these Terms.

          </p>
        </div>




        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              onClick={()=>{setdisplay1(!display1)}}
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">User Conduct</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display1?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
                        <p className="text-gray-500">
          You agree to use the Website only for lawful purposes and in 
          accordance with these Terms. You agree not to use the Website to:
          Transmit any unlawful, harmful, threatening, abusive, harassing, 
          defamatory, obscene, hateful, or racially or ethnically offensive
          material. Interfere with or disrupt the servers or networks 
          connected to the Website. Violate any applicable laws or regulations.

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
              <span className="flex text-lg font-semibold text-black">User Accounts</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <p className="text-gray-500">
            If you create an account on the Website, you are responsible for 
            maintaining the confidentiality of your account information and 
            password. You are also responsible for all activities that occur under 
            your account.

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
              <span className="flex text-lg font-semibold text-black">Limitation of Liability
</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display3?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <p className="text-gray-500">
              InstaCare will not be liable for any damages arising 
out of or related to your use of the Website, including, but not 
limited to, direct, indirect, incidental, consequential, or punitive 
damages.

              </p>
            </div>
          </div>
        
          
        </div>











        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              onClick={()=>{setdisplay2(!display2)}}
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">Modifications
</span>

              <ChevronUp className="h-5 w-5 text-gray-500" />
            </button>
            <div className={`${display2?"block":"hidden"} px-4 pb-5 sm:px-6 sm:pb-6`}>
              <p className="text-gray-500">
              InstaCare reserves the right to modify these Terms at any time. We
 will notify you of any changes by posting the new Terms on the 
Website. Your continued use of the Website after the posting of any 
changes constitutes your acceptance of the revised Terms.
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

export default Terms