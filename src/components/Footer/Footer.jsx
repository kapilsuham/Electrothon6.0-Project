import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import features from '../../pages/Features'

function Footer() {
  return (
    <section className="z-50 w-[104vw] 2xl:w-[107vw] min-[766px]:w-[92%] min-[1366px]:w-[100%] overflow-hidden py-4 border-t-2">
            <div className="bg-slate-950 relative z-10 w-[98%] px-3">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 2xl:ml-20 inline-flex items-center">
                               <Link to="/"><Logo width="100px" /></Link> 
                            </div>
                            <div>
                                <p className="text-sm text-white">
                                    &copy; Copyright 2024. All Rights Reserved by InstaCare.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-400">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/features"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/aboutus"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                {/* <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-400">
                                Support
                            </h3>
                            <ul>
                             
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/help"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/Contactus"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-400">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/terms"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-700 hover:text-gray-400"
                                        to="/privacy"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer