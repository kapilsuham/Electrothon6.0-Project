import React from 'react'
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'
import rishabh from '../Img/rishabh.jpg'
import kp from '../Img/kp.jpeg'
import rishabhe310 from '../Img/rishabhe310.jpeg'
import nishant from '../Img/nishant.jpeg'
function Aboutus() {

  return (
    <div className="mx-auto max-w-7xl px-2 md:px-0">
    <div className="my-4">
      <h1 className="text-6xl font-bold mt-5">People Who Made It Successful</h1>
      <p className="mt-2 text-xl text-gray-500 underline">
        This Is Our Team.
      </p>
    </div>
    <div className="grid grid-cols-1 mb-4 w-[100%] lg:ml-[15vw] gap-[5vw]  md:grid-cols-3">
      <div className="flex flex-wrap flex-col items-center text-start">
        <div
          className="relative flex flex-wrap h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={kp}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-fill"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Kapil Paliwal [Team Leader]</h1>
            <h6 className="text-base text-white">FullStack Developer</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={nishant}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Nishant Bhandari</h1>
            <h6 className="text-base text-white">Backend Developer</h6>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 mb-20 w-[100%] lg:ml-[15vw] gap-[5vw]  md:grid-cols-3">
      <div className="flex flex-wrap flex-col items-center text-start">
        <div
          className="relative flex flex-wrap h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={rishabhe310}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Rishabh Sharma</h1>
            <h6 className="text-base text-white">Frontend Developer</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-start">
        <div
          className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={rishabh}
            alt=""
            className="z-0 h-full w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-semibold text-white">Rishabh Sharma</h1>
            <h6 className="text-base text-white">Frontend Developer</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

    
export default Aboutus