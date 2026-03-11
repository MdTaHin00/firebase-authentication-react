import { getAuth, signOut} from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router'
import app from '../firebase/firebase.config'

function LogOut() {

    const auth = getAuth(app)

     const handelLogout = (e) => {
               e.preventDefault();
               signOut(auth).then(()=>{
                alert("User Sing Out successFully");
               }).catch((error)=>{
                 console.log(error);
               })
           }

    return (
        <div>
            <div>
                <div>
                    <nav>
                        <li><Link onClick={handelLogout} className=' bg-red-500 text-white px-4 py-2 rounded' >Logout</Link></li>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default LogOut
