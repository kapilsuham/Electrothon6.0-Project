const projectID = '97193ee2-090e-4727-b28a-c2f3037fd442';
import axios from 'axios';

import loginvid from "../Img/loginvid.mp4"

import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")
//   const handleSubmit = async (e) => {
//     e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };



    // try {
    //   setError('');
    // } catch (err) {
    //   setError('Oops, incorrect credentials.');
    // }







    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const login = async(data) => {
        setError("")
        try {
            await axios.get('https://api.chatengine.io/users/', 
            { headers:{"private-key":"e10980a8-1114-4b36-96f7-47c081d2c607" }});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // window.location.reload();
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")

            }
        } 
        catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='md:flex w-[100%] lg:w-[100%] py-3'>
        <video className='w-32 lg:w-72 ml-36 lg:ml-52' muted autoPlay loop src={loginvid}></video>
    <div className='flex items-center justify-center ml-10 w-[80%] lg:py-10'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px] justify-center ml-1">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Roll No: "
                value={username} onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Roll No."
                type="text"
              
                
                />
                <Input
                label="College Email: "
                placeholder="Enter your college email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })} />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                }
                )
            }
            value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                type="submit"
                className="w-full"
                
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Login