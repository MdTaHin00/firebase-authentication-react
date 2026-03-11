import React from 'react'
import './App.css'
import { Link } from 'react-router'
import LogOut from './components/LogOut'
import AuthStarts from './components/AuthStarts'

function App() {
  return (
    <div>
        <div className=' text-center w- mx-auto bg-sky-100 py-20'>
        <div>
          <h2 className='text-2xl  mb-10 text-center'>Private React Route Firebase Project</h2>
          <div className=''>
            <nav className=' list-none justify-center gap-2 space-y-10 flex '>
            <li><Link className=' bg-sky-500 text-white px-4 py-2 rounded' to='/login'>Login</Link></li>
            <li><Link className=' bg-sky-500 text-white px-4 py-2 rounded' to='/register'>Register</Link></li>
            <li><Link className=' bg-sky-500 text-white px-4 py-2 rounded' to='/dashboard'>Dashboard</Link></li>
            <li><Link className=' bg-sky-500 text-white px-4 py-2 rounded' to='/user-profile'>User Profile</Link></li>
          </nav>
          </div>

          <div className='flex  list-none justify-center gap-4'>
            <li><Link className=' bg-gray-600 text-white px-4 py-2 rounded' to='/update-profile'>Update Profile</Link></li>
            <li><Link className=' bg-green-600 text-white px-4 py-2 rounded' to='/update-password'>Update Password</Link></li>
            <li><Link className=' bg-orange-500 text-white px-4 py-2 rounded' to='/send-password-resent'>Send Password Resent Email</Link></li>
            <li><Link className=' bg-sky-500 text-white px-4 py-2 rounded' to='/password-less-email-link'>Password less Email Link</Link></li>
          </div>

        </div>
      </div>
      <div className='m-10 list-none space-y-5'>
        <AuthStarts/>
        <LogOut/>

      </div>
    </div>
  )
}

export default App
