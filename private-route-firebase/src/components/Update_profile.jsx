import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'

function Update_profile() {

  const{currentUser,updateUseProfile} = useAuth()

  const[name,setName] = useState("")
  const[photoUrl,setPhotoUrl] = useState("")
  const[updateSuccess, setUpdateSuccess] = useState()
  const[error,setError] =useState()

  const navigate = useNavigate();


  const handelUpdateProfile = async (e)=>{
    e.preventDefault();


    try {
      await updateUseProfile({
        displayName: name || currentUser.displayName,
        photoURL: photoUrl || currentUser.photoURL,
      })
  
      alert("Profile Update SuccessFully")
      setUpdateSuccess("Profile Update SuccessFully")
     //!  4 s por -> navigate call
      setTimeout(()=>{
        navigate("/")
      },4000)
    } catch (error) {
      setError("Update Not set",error)
    }
  }
  
console.log(currentUser);

  

  return (
    <div className='m-20 max-w-lg shadow-lg p-10 rounded'>

      <div >
        <h2 className='text-green-500 font-bold my-3 text-center text-2xl'>Current Profile</h2>
        <p>Display Name : <span className='font-bold'>{currentUser?.displayName}</span></p>
        <p>Photo URL:</p>
        {currentUser && (<img src={currentUser.photoURL}/>)}
      </div>
      
      {/* updata Profile  */}
      <div>
        <h2 className='text-sky-500 font-bold my-3 text-center text-2xl'>Update Profile</h2>
        <form onSubmit={handelUpdateProfile} className='space-y-5'>
           <div>
            <label htmlFor="" className='block'>Display Name</label>
            <input type="text" placeholder='Enter Name'
            className='border-2 border-sky-500 rounded px-2 focus:outline-none'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
           </div>
           <div>
            <label htmlFor="" className='block'>Photo URL</label>
            <input type="url" placeholder='Enter Photo URL'
            className='border-2 border-sky-500 rounded px-2 focus:outline-none'
            value={photoUrl}
            onChange={(e)=>setPhotoUrl(e.target.value)}
            />

           </div>
           <button type='submit' className='text-white bg-sky-500 px-4 py-2 rounded'>Update Submit</button>
           {
            updateSuccess && <p className='text-green-400'>{updateSuccess}</p>
           }
           {
            error && <p className='text-red-400'>{error}</p>
           }
        </form>
      </div>
    </div>
  )
}

export default Update_profile
