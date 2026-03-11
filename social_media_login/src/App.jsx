import React, { useState } from 'react'
import './App.css'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import app from './firebase/firebase.config';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
function App() {

  const auth = getAuth(app);
  const [value, setValue] = useState('')


  //* google Authentication 
  const handelGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        setValue(user.email)
      }).catch((error) => {
        console.log(error);
      });
  }


  //* facebook  Authentication  
  const handelFaceBookLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setValue(user.displayName)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //* giThub Authentication 
  const handelGithubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setValue(user.email);
      }).catch((error) => {
        console.log("Github error ", error);
      });
  }


  return (
    <div className='bg-gray-300 p-10 max-w-lg mx-auto rounded mt-20 shadow-lg '>
      <h1 className='text-xl text-sky-500 font-bold'>Social Media Login (Google , Facebook , Github)</h1>
      <div className='flex justify-around mt-5'>
        <button onClick={handelGoogleLogin} className='text-white  hover:bg-sky-400 duration-300 bg-sky-500 px-3 py-1 rounded'>Google <FaGoogle className='inline-block' /></button>
        <button onClick={handelFaceBookLogin} className='text-white hover:bg-red-400 duration-300 bg-red-500 px-3 py-1 rounded'>FaceBook <FaFacebook className='inline-block' /></button>
        <button onClick={handelGithubLogin} className='text-white hover:bg-gray-700 duration-300 bg-black px-3 py-1 rounded'>Github <FaGithub className='inline-block' /></button>
      </div>
      <div className='mt-10'>
        {
          value ? <p>Welcome: <span className='font-bold'>{value}</span></p> : <p>User Not Found</p>
        }
      </div>
    </div>
  )
}

export default App
