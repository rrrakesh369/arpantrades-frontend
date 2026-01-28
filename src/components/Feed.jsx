import React from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addUser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constants'
import Home from './Home';
import HeroSection from './HeroSection'

const Feed = () => {

  const dispatch = useDispatch();
  const navigate= useNavigate();

  const fetchUser = async () =>{
    try {
    const res= await axios.get(BASE_URL + "/profile", {
        withCredentials: true,
      });
      dispatch(addUser(res.data))
    } catch (err) {
      if(err.status===401){
        navigate("/");
      }
         
    }
  }

  useEffect(()=>{
    fetchUser();
  },[]);

  return (
   <div className='max-h-screen'>
        {/* <img
    className="bg-no-repeat bg-center bg-cover w-full h-auto"
    src="/images/upload/dashboardimage1.jpg"
    alt="image description"
  />
     <figcaption className="absolute left-10 px-4 text-lg text-white p-10 top-40 bg-black/40 mx-6 ">
      <p className=' text-4xl font-bold'>BUILDING SOLUTIONS</p>
      <p className='font-medium '>High-Performance Solutions for the Construction Industry</p>
  </figcaption> */}
   <Home/>
   </div>
  )
}

export default Feed
