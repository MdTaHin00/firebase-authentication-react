import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import app from '../firebase/firebase.config';

function AuthStarts() {
    const [user, setUser] = useState('')
    const auth = getAuth(app)

    useEffect(() => {
        const authStates = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.displayName;
                setUser(uid)
            } else {
                console.log("auth stats error");
            }
        });
        return () => authStates();
    }, [auth])

    return (
        <div>
            <div>
                {
                    user ? <p> User : <span className='font-bold'>{user}</span> Welcome</p> : <p>Please Login here</p>
                }
            </div>
        </div>
    )
}

export default AuthStarts
