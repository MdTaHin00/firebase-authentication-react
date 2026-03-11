import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import app from '../firebase/firebase.config';

function Login() {
const[email,setEmail] = useState('')
const [password,setPassword] = useState('')
// const [error,setError] = useState('')
const auth = getAuth(app);

const navigate = useNavigate()

const handelLogin = (e)=>{
  e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
console.log(userCredential);
navigate('/')
  })
  .catch((error) => {
  console.log(error);
  });
 
}

  return (
    <div>
       <div className='flex items-center justify-center min-h-screen bg-white '>
      <div className='w-full max-w-sm p-10 shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold text-center mb-5'>Sing In </h2>
        <form className='space-y-5' onSubmit={handelLogin}>
          {/* email */}
          <div>
            <label htmlFor="" className='block md-3 text-xl font-medium text-sky-600'>Email:</label>
            <input type="email" name="email" placeholder='Enter Your Email'
              className='w-full px-4 py-2 border focus:outline-none focus:ring-2
                 focus:ring-sky-500 focus:border-transparent rounded-lg '
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* password */}
          <div>
            <label htmlFor="" className='block md-3 text-xl font-medium text-sky-600'>Password:</label>
            <input type="password" name="password" placeholder='Enter Your Password'
              className='w-full px-4 py-2 border focus:outline-none focus:ring-2
                 focus:ring-sky-500 focus:border-transparent rounded-lg '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {
            error && <p className='text-red-400'>{error}</p>
          } */}
          {/* submit */}
          <button type='submit' className='w-full py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-400'>Login</button>
        </form>
        <p>Do not have an account Please? <Link to="/register" className='text-sky-500 underline'>Sign Up</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Login
