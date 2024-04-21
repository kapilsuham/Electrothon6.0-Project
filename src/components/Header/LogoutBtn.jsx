import React from 'react'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { Link, Navigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
           
          })
    }
  
  return (
    <>
    <button
    className='inline-bock duration-200 text-white'
    onClick={logoutHandler}
    >Logout</button>
    </>
  )
}

export default LogoutBtn