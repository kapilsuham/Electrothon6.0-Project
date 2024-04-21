import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Blog1 from './pages/Blog1.jsx'
import Blog2 from './pages/Blog2.jsx'
import Blog3 from './pages/Blog3.jsx'
import Blog4 from './pages/Blog4.jsx'
import Blog5 from './pages/Blog5.jsx'
import Blog6 from './pages/Blog6.jsx'
import Blog7 from './pages/Blog7.jsx'
import Chat from './pages/Chat.jsx'
import { AuthLayout, Login } from './components/index.js'


import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Features from './pages/Features.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Help from './pages/Help.jsx'
import Contactus from './pages/Contactus.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import Donate from './pages/Donate.jsx'

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";
import { Account } from 'appwrite'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/blog1",
            element: <Blog1 />,
        },
        {
            path: "/blog2",
            element: <Blog2 />,
        },
        {
            path: "/blog3",
            element: <Blog3 />,
        },
        {
            path: "/blog4",
            element: <Blog4 />,
        },
        {
            path: "/blog5",
            element: <Blog5 />,
        },
        {
            path: "/blog6",
            element: <Blog6 />,
        },
        {
            path: "/blog7",
            element: <Blog7 />,
        },
        {
            path: "/chat",
            element: <Chat />,
        },
        {
            path: "/features",
            element: <Features />,
        },
        {
            path: "/aboutus",
            element: <Aboutus />,
        },
        {
            path: "/help",
            element: <Help />,
        },
        {
            path: "/contactus",
            element: <Contactus />,
        },
    
        {
            path: "/terms",
            element: <Terms/>,
        },
    
        {
            path: "/privacy",
            element: <Privacy Policy />,
        },
    
       
    
        {
            path: "/donate",
            element: <Donate />,
        },
    ],
},
])
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
