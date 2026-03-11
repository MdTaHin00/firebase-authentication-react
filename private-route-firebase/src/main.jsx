import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import DashBoard from './components/DashBoard.jsx';
import Private_routes from './private_route/Private_routes.jsx';
import User_profile from './components/User_profile.jsx';
import Update_profile from './components/Update_profile.jsx';
import UpdatePassword from './components/UpdatePassword.jsx';
import Send_Password_Resent from './components/Send_Password_Resent.jsx';
import FinishSignIn from './components/passwordLess/FinishSignIn.jsx';
import PasswordLessSignLink from './components/passwordLess/PasswordLessSignLink.jsx';

createRoot(document.getElementById('root')).render(
 //!  context folder -> const rap
 <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/password-less-email-link" element={<PasswordLessSignLink/>}/>
        <Route path='/finish-signin' element={<FinishSignIn/>} />
        <Route path='/dashboard' element={<Private_routes><DashBoard/></Private_routes>}/>
        <Route path="/user-profile" element={<Private_routes><User_profile/></Private_routes>}/>
        <Route path="/update-profile" element={<Private_routes><Update_profile/></Private_routes>}/>
        <Route path="/update-password" element={<Private_routes><UpdatePassword/></Private_routes>}/>
        <Route path="/send-password-resent" element={<Private_routes><Send_Password_Resent/></Private_routes>}/>
        
      </Routes>
    </BrowserRouter>,
  </AuthProvider>
)
