import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import heart from '../Img/heart.jpg'
import bone from '../Img/bone.jpg'
import health from '../Img/health.jpg'
import anxiety from '../Img/anxiety.jpg'
import brain from '../Img/brain.jpg'
import strokes from '../Img/strokes.jpg'
import respiration from '../Img/respiration.jpg'




function Blog() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
          name: "Blog",
          slug: "/blog",
          active: !authStatus,
      }]
    const [error, setError] = useState("")
    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/blog")
            }
        } catch (error) {
            setError(error.message)
        }
    }  
        return (
          <div className='flex flex-wrap max-md:mr-0 max-2xl:mr-20 justify-center p-5 lg:py-5'>
          <div className="relative m-4 2xl:m-10 h-[400px] w-[300px] rounded-md">
          <img
            src={health}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Damaged Health Policy</h1>
            <p className="mt-2 text-sm text-gray-300">
            How the Search for Perfect Markets has Damaged Health Policy
            </p>
            <Link to="/blog1">
            <button onClick={() => navigate(Home)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button>
            </Link>
            
          </div>
        </div>
          <div className="relative m-4 2xl:m-10 h-[400px] w-[300px] rounded-md">
          <img
            src={heart}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Heart health</h1>
            <p className="mt-2 text-sm text-gray-300">
            Heart Health Matters: Strategies and Tips for a Healthier Heart

            </p>
            <Link to="/blog2">
            <button onClick={() => navigate(Home)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button>
            </Link>
            
          </div>
        </div>
          <div className="relative m-4 2xl:m-10 h-[400px] w-[300px] rounded-md">
          <img
            src={bone}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Bone cancer</h1>
            <p className="mt-2 text-sm text-gray-300">
            Bone Cancer: What You Need to Know
            </p>
            <Link to="/blog3">
            <button onClick={() => navigate(Home)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button>
            </Link>
            
          </div>
        </div>
          <div className="relative m-4 2xl:m-10 h-[400px] w-[300px] rounded-md">
          <img
            src={brain}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Brain</h1>
            <p className="mt-2 text-sm text-gray-300">
            Neuromuscular Disorders: Types, Symptoms, Diagnosis & Treatment Options
            </p>
            <Link to="/blog4">
            <button onClick={() => navigate(Home)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button>
            </Link>
            
          </div>
        </div>
          <div className="relative m-4 2xl:m-10 h-[400px] w-[300px] rounded-md">
          <img
            src={anxiety}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Anxiety</h1>
            <p className="mt-2 text-sm text-gray-300">
            Despite all the advancements that have made our lives much easier, anxiety continues to be a growing
            </p>
            <Link to="/blog5">
            <button onClick={() => navigate(Home)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button>
            </Link>
            
          </div>
        </div>
          <div className="relative m-4 2xl:m-10 h-[400px] w-[300px] rounded-md">
          <img
            src={strokes}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Strokes</h1>
            <p className="mt-2 text-sm text-gray-300">
            Winter Stroke Risks: 5 Factors to Know and Preventive Tips
            </p>
            <Link to="/blog6">
            <button onClick={() => navigate(Home)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button>
            </Link>
            
          </div>
        </div>
          <div className="relative m-4 2xl:m-10 h-[400px] w-[300px] rounded-md">
          <img
            src={respiration}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Respiration</h1>
            <p className="mt-2 text-sm text-gray-300">
            Pollution, Respiratory Health & Precautions Tips
            </p>
            <Link to="/blog7">
            <button onClick={() => navigate(Home)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More →
            </button>
            </Link>
            
          </div>
        </div>
        </div>
        )
    }
export default Blog


