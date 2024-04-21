import React, {useEffect, useState} from 'react'
import {Container} from '../components'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { ChatEngine } from 'react-chat-engine';
import { Link } from 'react-router-dom'


import ChatFeed from '../components/ChatFeed';
import Home from './Home';
import '../App.css';
import { logout } from '../store/authSlice';
const projectID = '97193ee2-090e-4727-b28a-c2f3037fd442';






function Chat() {
    // setInterval(() => {
        // useEffect(()=>{window.location.reload()},[])
        
    // }, 50000);
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const item = [
        // {
        //   name: "Chat",
        //   slug: "/chat",
        //   active: !authStatus,
        // },
        {
          name: "Home",
          slug: "/home",
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
 
    const navItems = [
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
      }]
    if (authStatus ) {

        return (
            <div className="max-2xl:mt-2 ml-[-16vw] h-[90vh] text-center 2xl:ml-[-20vw]">
            <Container>
                <div className="p-1 flex flex-wrap lg:w-[100vw]">
                    <div className="w-full">
                    <ChatEngine
                    height="90vh"
                    projectID={projectID}
                    // onGetOtherPeople={(chatId,chat, people) =>{setTimeout(() =>{ window.location.reload()},6000)}}
                    // onGetMessages={(chatId, messages) =>{setTimeout(() =>{ window.location.reload()},1000)}}
                    // onDeleteMessage={(chats,messages) =>{setTimeout(() =>{ window.location.reload()},1000)}}
                    // onNewChat={(chat,chatId) => {setTimeout(() =>{ window.location.reload()},1000)}}
                    // onDeleteChat={(chat,chatId) => {setTimeout(() =>{window.location.reload()},5000)}}
                    // onEditChat={(chat,people) => {setTimeout(() =>{window.location.reload()},5000)}}
                    
                    userName={localStorage.getItem('username')}
                    userSecret={localStorage.getItem('password')}
                    renderChatFeed={(chatAppProps) => 
                    <ChatFeed {...chatAppProps} />}
                    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                    />
                    </div>
                    <button onClick={()=>{window.location.reload()}} className=' bg-[#7554a0] text-white rounded-lg top-[35vw] p-3 absolute right-10 hover:bg-purple-700'>Submit</button>
                    <button onClick={()=>{window.location.reload()}} className=' bg-[#7554a0] text-white rounded-lg top-[9vh] 2xl:top-[6.8vh] p-2 absolute left-[22.3vw] hover:bg-purple-700'>ok</button>
                </div>
            </Container>
            </div>
        )
    }
    else{
        return(
            <Home/>            
       )
    }}

export default Chat


