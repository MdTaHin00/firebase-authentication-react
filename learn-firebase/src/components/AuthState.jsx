import React, { useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function AuthState() {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    //* current user check

    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser.email);
            } else {
                console.log("user not found");
            }
        });
        return ()=> unsubscribe();
    }, [auth])
    return (
        <div>
            {
                user ? <p> Welcome : {user}</p> : <p>Please Login here</p>
            }
        </div>
    )
}

export default AuthState
