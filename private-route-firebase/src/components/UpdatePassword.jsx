import { getAuth, updatePassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import app from '../firebase/firebase.config';
import { useNavigate } from 'react-router';

function UpdatePassword() {

    const[showPassword,setShowPassword] = useState(false)
    const[confirmShowPassword,setConfirmShowPassword] = useState(false)
    const[message,setMessage] = useState("")

    const[newPassword,setNewPassword] = useState('')
    const[confirmPassword,setConfirmPassword] = useState('')
    
    const auth = getAuth(app)

    const navigate = useNavigate()
   const handelUpdatePassword =  async (e)=>{
       e.preventDefault();
       if(newPassword !== confirmPassword){
        setMessage("Passwords Does Not Match");
       }

       if(newPassword.length < 6){
        setMessage("Password must be at 6 letter long")
       }

       //* currentUser -> context folder AuthContext file
       const user = auth.currentUser;


       if(user){
        try {
            await updatePassword(user,newPassword)
            .then(()=>{
                setMessage("Update SuccessFully")
                setTimeout(()=>{
                    navigate('/')
                },3000)
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
       }else{
        setMessage("Updata Password error");
        
       }
       
   }


    return (
    <div className='flex justify-center mt-20 items-center '>
      <div className='shadow-lg p-10 rounded-lg'>
        <h1 className='text-center text-sky-400 text-xl'>Update Password</h1>
        {
            message && <p className='text-red-400'>{message}</p>
        }
        <form className='space-y-5 mt-6' onSubmit={handelUpdatePassword}>
            <div className='relative'>
                <label htmlFor="" className='block'>New Password</label>
                <input 
                value={newPassword}
                onChange={(e)=>{setNewPassword(e.target.value)}}
                type={showPassword ? "text" : "password"} placeholder='Enter New Password'
                className='border-2  focus:outline-none border-sky-500 px-4 py-1 rounded '/>
                <div className='top-8 right-3 absolute cursor-pointer ' onClick={()=>{setShowPassword(!showPassword)}}>
                    {
                        showPassword ? <FaEyeSlash className='text-gray-600 text-xl'/>  : <FaEye className='text-gray-600 text-xl'/>
                    }
                </div>
            </div>

            <div className='relative'>
                <label htmlFor="" className='block'>Confirm Password</label>
                <input 
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                type={confirmShowPassword ? "text" : "password"} placeholder='Enter Confirm Password'
                className='border-2  focus:outline-none border-sky-500 px-4 py-1 rounded '/>
                <div className='top-8 right-3 absolute cursor-pointer ' onClick={()=>{setConfirmShowPassword(!confirmShowPassword)}}>
                    {
                        confirmShowPassword ? <FaEyeSlash className='text-gray-600 text-xl'/>  : <FaEye className='text-gray-600 text-xl'/>
                    }
                </div>
            </div>
            <button type='submit' className='bg-sky-500 w-full py-2 rounded-lg  text-white'>Update Password</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePassword
