import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Navigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CarouselFadeExample from "../components/Slider";
import Untitled1 from "/src/Img/Untitled1.png";
import communications from "/src/Img/communications.mp4";
import ambulance from "/src/Img/ambulance.mp4";
import logowhite from "/src/Img/logowhite.jpeg";
import phone from "/src/Img/phone.png";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
  ];
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  const [text] = useTypewriter({
    words: ["Doctors", "Experts", "People"],
    loop: {},
  });

  // if (posts.length === 0) {
    return (
      <>
        <div className="max-sm:ml-[-1vw] max-[392px]:h-[227vh] my-[-4.5vh] h-[200vh] lg:h-[420vh] relative max-sm:w-[105%] w-[100%] lg:w-[100%] z-[10] bg-slate-200 2xl:h-[370vh] 2xl:pt-8">
          <div className="lg:py-48 sm:h-[100vh] mt-8 w-[1vw]">
            <Container>
              <div className="flex flex-wrap w-[100vw]">
                <div className="p-2 w-full">
                  {navItems.map((item) =>
                    item.active ? (
                      <div key={item.name}>
                        {/* login se pehle wala page */}
                        <CarouselFadeExample />

                        <div className="flex border-y-gray-600 border-4 py-10 lg:py-20 w-[103%] ml-[-9vw] lg:ml-[-2vw] bg-white">
                          <div>
                            <img src={logowhite} className="w-32 lg:w-72 lg:44 ml-8 lg:ml-[25vw]" alt="" />
                          <div className="underline text-base lg:text-4xl lg:ml-48 w-[60%] mb-4 lg:w-[50%]">
                            Empowering Wellness, Enriching Lives: Your Path to Holistic Health
                            </div>
                            <div className="text-base lg:text-3xl lg:ml-48 w-[60%] lg:w-[50%]">
                              The Future of Healthcare: Embracing Online Doctor
                              Consultations
                            </div>
                            

                            <div className="container ml-[-8vh] lg:ml-[-16vh] mt-4 text-center">
                              <div className="lg:text-4xl font-bold text-slate-800">
                                Connect with
                              </div>
                              <span className="text-lg lg:text-4xl font-bold text-black">
                                
                                {text}
                              </span>
                              <Cursor />
                              
                            </div>
                          </div>
                          <img
                            className="ml-[-25vw] lg:ml-[-15vw] w-32 h-64 lg:h-full lg:w-48"
                            src={phone}
                            alt=""
                          />
                        </div>
                        <div className="flex md:py-5 ml-[-3vh]">
                          <video
                            className="w-32 lg:w-[20%] lg:ml-32 mt-5 lg:mt-28"
                            src={communications}
                            muted
                            autoPlay
                            loop
                          ></video>
                          <div className="lg:ml-32">
                            <h1 className="mt-10 lg:mt-16 ml-[-12vw] lg:ml-[-2vw] text-2xl  lg:text-5xl text-center">
                              Consult With Chat
                            </h1>
                            <div className="lg:text-3xl ml-6 lg:ml-32 text-center w-[70%] mt-10 lg:mt-12">
                              Online Doctor Consultations Over Chat Feature
                            </div>
                            <div className="lg:text-3xl ml-6 lg:ml-32 text-center w-[70%] mt-10 lg:mt-12">
                              In this digital age, the future of healthcare is
                              online
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 lg:mt-36 flex w-[100%] ml-[-3vh] lg:ml-[-1vw] border-y-gray-600 border-4 py-10 lg:py-20 bg-white">
                          <div className="justify-center w-[60%] lg:ml-20">
                            <span className="font-bold text-3xl lg:text-7xl lg:mt-10">
                              Now!
                            </span>
                            <span className="text-slate-600 font-semibold text-xl lg:text-5xl lg:mt-10">
                              {" "}
                              It Becomes Easy
                            </span>
                            <div className="font-bold text-2xl lg:text-6xl mt-1 lg:mt-10">
                              With InstaCare
                            </div>
                            <div className="text-slate-600 font-semibold text-xl lg:text-4xl mt-3 lg:mt-10">
                              Mainting Health And Regular Checkups
                            </div>
                            <div className="text-slate-600 font-semibold text-lg lg:text-4xl mt-3 lg:mt-10">
                              New Power Within Your Palm
                            </div>
                          </div>
                          <video
                            className="w-32 lg:w-80 ml-3 lg:ml-28"
                            src={ambulance}
                            muted
                            autoPlay
                            loop
                          ></video>{" "}
                        </div>
                        <div className="lg:mt-10 flex w-[95%] lg:ml-[-2vw] lg:py-20">
                          <img
                            className="h-48 min-[766px]:h-[70vh] min-[1366px]:h-[30vw] ml-[-7vw] lg:ml-20 mt-10"
                            src={Untitled1}
                            alt=""
                          />
                          <div className="ml-1 lg:ml-20 w-[50%] mt-8 lg:mt-16">
                            <div className="text-xs lg:text-2xl">
                              {" "}
                              No longer do patients have to endure long waits in
                              crowded waiting rooms or spend Time traveling to a
                              healthcare facility.
                            </div>
                            <div className="text-xs lg:text-2xl text-gray-500 mt-4">
                              Time is a precious commodity, and online doctor
                              consultations help patients save plenty of it.
                            </div>
                            <div className="text-xs lg:text-2xl mt-4">
                              Enhanced Privacy and Comfort
                            </div>
                            <div className="text-xs lg:text-2xl text-gray-500 mt-4">
                              enable doctors to access patients' medical
                              histories and make informed decisions about their
                              care
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div key={item.name}>
                        {/* login se pehle wala page */}
                        <CarouselFadeExample />

                        <div className="flex border-y-gray-600 border-4 py-10 lg:py-20 w-[103%] ml-[-9vw] lg:ml-[-2vw] bg-white">
                          <div>
                          <img src={logowhite} className="w-32 lg:w-72 lg:44 ml-8 lg:ml-[25vw]" alt="" />

                            <div className="underline text-base lg:text-4xl lg:ml-48 w-[60%] mb-4 lg:w-[50%]">
                            Empowering Wellness, Enriching Lives: Your Path to Holistic Health
                            </div>
                            <div className="text-base lg:text-3xl lg:ml-48 w-[60%] lg:w-[50%]">
                              The Future of Healthcare: Embracing Online Doctor
                              Consultations
                            </div>
                            

                            <div className="container ml-[-8vh] lg:ml-[-16vh] mt-4 text-center">
                              <div className="lg:text-4xl font-bold text-slate-800">
                                Connect with
                              </div>
                              <span className="text-lg lg:text-4xl font-bold text-black">
                                
                                {text}
                              </span>
                              <Cursor />
                              
                            </div>
                          </div>
                          <img
                            className="ml-[-25vw] lg:ml-[-15vw] w-32 h-64 lg:h-full lg:w-48"
                            src={phone}
                            alt=""
                          />
                        </div>
                        <div className="flex md:py-5 ml-[-3vh]">
                          <video
                            className="w-32 lg:w-[20%] lg:ml-32 mt-5 lg:mt-28"
                            src={communications}
                            muted
                            autoPlay
                            loop
                          ></video>
                          <div className="lg:ml-32">
                            <h1 className="mt-10 lg:mt-16 ml-[-12vw] lg:ml-[-2vw] text-2xl  lg:text-5xl text-center">
                              Consult With Chat
                            </h1>
                            <div className="lg:text-3xl ml-6 lg:ml-32 text-center w-[70%] mt-10 lg:mt-12">
                              Online Doctor Consultations Over Chat Feature
                            </div>
                            <div className="lg:text-3xl ml-6 lg:ml-32 text-center w-[70%] mt-10 lg:mt-12">
                              In this digital age, the future of healthcare is
                              online
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 lg:mt-36 flex w-[100%] ml-[-3vh] lg:ml-[-1vw] border-y-gray-600 border-4 py-10 lg:py-20 bg-white">
                          <div className="justify-center w-[60%] lg:ml-20">
                            <span className="font-bold text-3xl lg:text-7xl lg:mt-10">
                              Now!
                            </span>
                            <span className="text-slate-600 font-semibold text-xl lg:text-5xl lg:mt-10">
                              {" "}
                              It Becomes Easy
                            </span>
                            <div className="font-bold text-2xl lg:text-6xl mt-1 lg:mt-10">
                              With InstaCare
                            </div>
                            <div className="text-slate-600 font-semibold text-xl lg:text-4xl mt-3 lg:mt-10">
                              Mainting Health And Regular Checkups
                            </div>
                            <div className="text-slate-600 font-semibold text-lg lg:text-4xl mt-3 lg:mt-10">
                              New Power Within Your Palm
                            </div>
                          </div>
                          <video
                            className="w-32 lg:w-80 ml-3 lg:ml-28"
                            src={ambulance}
                            muted
                            autoPlay
                            loop
                          ></video>{" "}
                        </div>
                        <div className="lg:mt-10 flex w-[95%] lg:ml-[-2vw] lg:py-20">
                          <img
                            className="h-48 min-[766px]:h-[70vh] min-[1366px]:h-[30vw] ml-[-7vw] lg:ml-20 mt-10"
                            src={Untitled1}
                            alt=""
                          />
                          <div className="ml-1 lg:ml-20 w-[50%] mt-8 lg:mt-16">
                            <div className="text-xs lg:text-2xl">
                              {" "}
                              No longer do patients have to endure long waits in
                              crowded waiting rooms or spend Time traveling to a
                              healthcare facility.
                            </div>
                            <div className="text-xs lg:text-2xl text-gray-500 mt-4">
                              Time is a precious commodity, and online doctor
                              consultations help patients save plenty of it.
                            </div>
                            <div className="text-xs lg:text-2xl mt-4">
                              Enhanced Privacy and Comfort
                            </div>
                            <div className="text-xs lg:text-2xl text-gray-500 mt-4">
                              enable doctors to access patients' medical
                              histories and make informed decisions about their
                              care
                            </div>
                          </div>
                        </div>
                      </div>

                    )
                  )}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </>
    );
  }
  // return (
  //   <div className="w-full py-8 ">
  //     <Container>
        
  //       <div className="flex flex-wrap">
  //         {posts.map((post) => (
  //           <div key={post.$id} className="p-2 w-1/4">
  //             <PostCard {...post} />
  //           </div>
  //         ))}
  //       </div>
  //     </Container>
  //   </div>
  // );
// }

export default Home;
