import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const navigate = useNavigate();


  const handelSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        navigate("/login")
      })
      .catch((error) => {
        console.log(error.code);
      });


  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-white '>
      <div className='w-full max-w-sm p-10 shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold text-center mb-5'>Please Register</h2>
        <form className='space-y-5' onSubmit={handelSubmit}>
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

          {/* submit */}
          <button type='submit' className='w-full py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-400'>Sing Up</button>
        </form>
        <p>Already have an account? <Link to="/login" className='text-sky-500 underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register
