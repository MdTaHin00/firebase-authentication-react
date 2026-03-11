import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import app from '../firebase/firebase.config';

function Send_Password_Resent() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const auth = getAuth(app);

    const handelPasswordReset = async (e) => {
        e.preventDefault(e);

        if (!email) {
            setMessage("Please Inter Your Email Address")
            setIsSuccess(false)
        }

        try {
           await sendPasswordResetEmail(auth, email)
                .then(() => {
                    setMessage("Your Email Reset and Check Your Gmail inbox");
                    setIsSuccess(true);
                })
                .catch((error) => {
                    console.log(error);

                });

        } catch (error) {
            setMessage("Your Email Not Send Password")
            setIsSuccess(false)
            console.log(error);

        }
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-white'>
            <div className='w-full max-w-md p-8 shadow-lg rounded-lg'>
                <h2 className='text-2xl font-bold text-center mb-10'>Reset Your Password</h2>
                {
                    message && <p className={`p-2 text-center mb-3 ${isSuccess ?
                        "text-green-500 bg-green-100" : "text-red-500 bg-red-100"}`}>{message}</p>
                }
                <form onSubmit={handelPasswordReset}>
                    <div>
                        <label htmlFor="" className='text-xl block mb-2'>Email Address</label>
                        <input type="email" placeholder='Enter Your Email '
                            className='focus:border-2 focus:border-sky-500 
                        focus:outline-none w-full rounded-lg px-3 py-1 '
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </div>
                    <button type='submit' className='bg-sky-500 text-white py-1 w-full rounded-md mt-8'>Send Reset Email</button>
                </form>
            </div>
        </div>
    )
}

export default Send_Password_Resent
