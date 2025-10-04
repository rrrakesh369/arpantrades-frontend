import React from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addUser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constants'

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
      console.error(err)      
    }
  }

  useEffect(()=>{
    fetchUser();
  },[]);

  return (
   <div>
    <h1>Hello</h1>
   </div>
  )
}

export default Feed
