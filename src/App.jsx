import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx'
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
const projectID = "a95f4fc4-bc0d-4fc3-815e-514664603dd";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // if (!localStorage.getItem('username'));

  // return (
  // {
  //    <ChatEngine
  //     height="100vh"
  //     projectID={projectID}
  //     userName={localStorage.getItem('username')}
  //     userSecret={localStorage.getItem('password')}
  //     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  //     onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  //   />
  // }
  // );

  // infinite scroll, logout, more customizations...

  return !loading ? (
    
    <div className="min-h-[73vh] flex flex-wrap content-between w-[119.6%] ml-[-8.2vw] sm:ml-[-4.6vw] bg-white mb-[-10vh] max-sm:overflow-x-hidden max-sm:overscroll-y-none min-[768px]:ml-[-2.75vw] min-[1366px]:ml-[-5.8vw] 2xl:ml-[-10.28vw] 2xl:w-[100vw]">


        <ScrollToTop/>
      <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
