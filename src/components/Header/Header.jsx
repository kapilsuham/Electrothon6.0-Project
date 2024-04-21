import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ham from "../../Img/ham.svg";
import cancel from "../../Img/cancel.svg";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [hamml,sethamml]=useState(false);

  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Blog",
      slug: "/blog",
      active: !authStatus || authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add-Post",
      slug: "/add-post",
      active: authStatus,
    },

    {
      name: "Chat",
      slug: "/chat",
      active: authStatus,
    },
    {
      name: "Donate",
      slug: "/donate",
      active: authStatus,
    },
  ];
  const navItemsmob = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Blog",
      slug: "/blog",
      active: !authStatus || authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add-Post",
      slug: "/add-post",
      active: authStatus,
    },

    // {
    //   name: "Chat",
    //   slug: "/chat",
    //   active: authStatus,
    // },
    {
      name: "Donate",
      slug: "/donate",
      active: authStatus,
    },
  ];

  return (
    <div className="w-[100%] xl:w-[100%] bg-slate-950 h-16 mt-[-5.5vh] lg:ml-[0.23vw] z-50 fixed">
      <div className="fixed top-9 bg-slate-950 z-50 ">
        <div className="flex h-3 gap-3 mx-[-1px] sm:h-3 md:my-1.5 md:h-3 lg:h-3 xl:ml-[] 2xl:h-2">
          <div className="mx-3  my-[-3.7vh] sm:my-[-5vh] md:my-[-4.9vh] lg:my-[-5vh]">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="nav nav-underline mx-2 gap-4 sm:gap-4 sm:my-[-4vh]  md:my-[-4.5vh] lg:mb-10 lg:my-[-5vh] my-[-4vh] max-[500px]:hidden">
            {navItems.map((item) =>
              item.active ? (
                <li
                  onClick={() => navigate(item.slug)}
                  key={item.name}
                  className="nav-item"
                >
                  <Link
                    to="{item.slug}"
                    className="nav-link md:text-xl text-white"
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="nav nav-underline font-medium sm:text-lg ml-[40vw]">
                <LogoutBtn />
              </li>
            )}
          </ul>
          <div>
              <img
              className="h-8 ml-40 mt-[-2.8vh] invert min-[500px]:hidden"
              src={ham}
              onClick={()=>{sethamml(!hamml)}}
              alt=""
            />
       
            <div id="ham" className="min-[500px]:hidden ">
              <ul className={`flex-col w-52 h-[100vh] absolute bg-slate-950 nav nav-underline ${hamml?"block":"hidden"} ml-[3vw] gap-4 my-[-4vh]`}>
                <li><img className="h-7 invert m-3" src={cancel} onClick={()=>{sethamml(!hamml)}} alt="" /></li>
                {navItemsmob.map((item) =>
                  item.active ? (
                    <li
                      onClick={() => navigate(item.slug)}                    
                      key={item.name}
                      className="nav-item"
                    >
                      <Link
                        to="{item.slug}"
                        className="nav-link md:text-xl text-white"
                        aria-current="page"
                      >
                       {item.name}
                      </Link>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li className="nav nav-underline font-medium sm:text-lg ml-[20vw]">
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </div> 
            
          
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;
