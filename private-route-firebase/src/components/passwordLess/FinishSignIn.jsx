import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import app from '../../firebase/firebase.config'
import { useNavigate } from 'react-router'

function FinishSignIn() {


  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate();
  const auth = getAuth(app)



  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      setMessage("Invalid or expired sign in link!");

      setIsSuccess(false)
      return;
    }
  }, [auth])


  const handelCompleteSend = async (e) => {
    e.preventDefault();

    const storedEmail = window.localStorage.getItem("emailForSingIn");
    const emailToUse = email || storedEmail;

    if (!emailToUse) {
      setMessage("Please provide the email address used to receive the sign-in link.")
      setIsSuccess(false)
    }

    try {
      signInWithEmailLink(auth, email, window.location.href);
      setMessage("Signing is Successfully");
      setIsSuccess(true);
      window.localStorage.removeItem('emailForSingIn');
      setTimeout(()=>{ 
      navigate('/dashboard')
      },4000)
    } catch (error) {
      console.log(error);
      setMessage("Error send to email Complete failed. Please Try again.")

    }


  }
  return (
    <div className='mt-20 max-w-lg mx-auto'>
      <div className='shadow-lg rounded p-10'>
        <h2 className='mb-10 text-center text-2xl text-gray-600'>Complete Your Sign In</h2>
        {
          message && <p className={`text-center py-1 my-4 rounded-xl ${isSuccess ? 'text-green-400 bg-green-50' : 'text-red-400 bg-red-50'}`}>{message}</p>
        }
        <form className='space-y-10' onSubmit={handelCompleteSend}>
          <div>
            <label htmlFor="" className='text-2xl font-bold mb-3 block'>Email</label>
            <input type="email" placeholder='Enter Your Email'
              className='w-full border-2 border-green-400 py-1 px-5 
           rounded focus:outline-none'
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </div>
          <button type='submit' className='text-white  bg-green-400 w-full rounded-3xl py-2'>
            Complete Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default FinishSignIn
