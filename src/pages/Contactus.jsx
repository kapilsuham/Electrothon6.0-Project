import React from 'react'
import { Link } from 'react-router-dom'
Link

function Contactus() {
  return (
    <section className="p-5 lg:h-[73vh]">
      <div className="mx-auto max-w-7xl py-20">
        <div>
          <div className="max-w-2xl">
            <h1 className="text-3xl ml-[-38vw] font-bold text-black">Contact Us</h1>
            <p className="mt-4 lg:ml-[-40vw] text-sm leading-6 tracking-wide text-gray-500">
              Help us to develop  
            </p>
          </div>
          <div className="mt-6 w-[93%] grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <div className="rounded-md border border-black/30 p-6">
                <dt className="text-lg font-semibold leading-6 text-gray-900">
                 Gmail:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  <Link className='underline' to="mailto:">instacare.6.0.01@gmail.com</Link> 
                </dd>
              </div>
              <div className="rounded-md border border-black/30 p-6">
                <dt className="text-lg font-semibold leading-6 text-gray-900">
                  HeadQuater Address:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
               E-316, Kailash Boys Hostel (KBH)
               <div> NIT-H</div>
                </dd>
              </div>
              <div className="rounded-md border border-black/30 p-6">
                <dt className="text-lg font-semibold leading-6 text-gray-900">
                  Gtihub Link:
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                <Link to="/" className='underline'>githublink</Link>
                </dd>
              </div>
          </div>
        </div>
      </div>
    </section>
  
)}

export default Contactus