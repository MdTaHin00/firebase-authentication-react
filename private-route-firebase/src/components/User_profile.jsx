import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router'

function User_profile() {

    const{currentUser}=useAuth()
    
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='max-w-md shadow-lg rounded  p-10'>
        <h1 className='text-sky-500 font-light text-2xl'>User Profile</h1>
        <h3 className='font-bold'>Welcome : {currentUser?.displayName || "User"}</h3>
        <div className='space-y-4'>
          <p>Email : {currentUser?.email || "NULL"}</p>
          {
            currentUser ?.photoURL && <img src={currentUser?.photoURL} alt='photo url'/>
          }
          <p>Email Verified : {currentUser ?.emailVerified || "False"}</p>
          <p>User ID: <span  className="text-bold">{currentUser?.uid || "NULL"}</span></p>
          <div>
            <Link to="/update-profile" className='text-white bg-sky-500 px-4 py-2 rounded '>Edit Profile</Link>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default User_profile
