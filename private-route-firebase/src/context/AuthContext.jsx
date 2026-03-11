import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)
const auth = getAuth(app);

//!  main.jsx fila  -> rap kola
export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)
  const [loading,setLoading] = useState(true)


  //! current user starts 
  useEffect(() => {
    const authStates = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    });
    return () => authStates()
  }, [auth])


  //! update user profile
  const updateUseProfile = async (newProfile)=>{
      if(currentUser){
        try {
          await updateProfile(currentUser,newProfile);
        setCurrentUser((prevUser)=>({
          ...prevUser,
          ...newProfile
        }))
        } catch (error) {
          console.log(error);
          
        }
      }else{
        throw new Error("No user is currently signed in.")
      }
  }

  //*  value object send kola
  const value = { currentUser , loading , updateUseProfile}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}

