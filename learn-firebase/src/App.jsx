import React from 'react'
import './App.css'
import { Link } from 'react-router'
import LogOut from './components/LogOut'
import AuthState from './components/AuthState'

function App() {
  return (
    <div>
      <div className=' text-center mt-20 bg-sky-100 py-20'>
        <div>
          <h2 className='text-2xl  mb-10 text-center'>FireBase Email & Password Authentication</h2>
          <nav className=' list-none space-y-10'>
            <li><Link className=' bg-sky-500 text-white px-4 py-2 rounded' to='/login'>Login</Link></li>
            <li><Link className=' bg-sky-500 text-white px-4 py-2 rounded' to='/register'>Register</Link></li>
          </nav>
        </div>
      </div>
      <div className='mt-10 ms-20 list-none space-y-5'>
         <LogOut/>
         <AuthState/>
      </div>
    </div>


  )
}

export default App
