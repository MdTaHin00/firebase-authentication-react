import React, { useState } from 'react'
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import app from '../../firebase/firebase.config';

function PasswordLessSignLink() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSuccess,setIsSuccess] = useState(false)
   
  const auth = getAuth(app)

  const actionCodeSettings = {
    url:"http://localhost:5173/finish-signin",
     handleCodeInApp: true,
  }

  const handelSendSingInLink= async (e)=>{
    e.preventDefault();

    try {
       sendSignInLinkToEmail(auth,email,actionCodeSettings)
        window.localStorage.setItem("emailForSingIn",email)
        setIsSuccess(true)
        setMessage("Sign in link sent successfully to your email address. Please check your inbox.")
        }
         catch (error) {
         console.log(error);
         setMessage("Failed to send email link.Please try again.")
         setIsSuccess(false)
    }

  }
  return (
    <div className='mt-20 max-w-lg mx-auto'>
      <div className='shadow-lg rounded p-10'>
        <h2 className='mb-10 text-center text-2xl text-gray-600'>Sign In With Email Link</h2>
        {
          message && <p className={`text-center py-1 my-4 rounded-xl ${isSuccess ? 'text-green-400 bg-green-50' : 'text-red-400 bg-red-50'}`}>{message}</p>
        }
        <form className='space-y-10' onSubmit={handelSendSingInLink}>
          <div>
            <label htmlFor="" className='text-2xl font-bold mb-3 block'>Email</label>
            <input type="email" placeholder='Enter Your Email'
              className='w-full border-2 border-green-400 py-1 px-5 
           rounded focus:outline-none'
              onChange={(e) => setEmail(e.target.value)}
              value={email} />
          </div>
          <button type='submit' className='text-white  bg-green-400 w-full rounded-3xl py-2'>
            Send Sign In Link
          </button>
        </form>
      </div>
    </div>
  )
}


export default PasswordLessSignLink
