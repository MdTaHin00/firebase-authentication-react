import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router';

function Private_routes({ children }) {

  //* context folder Auth file -> call 
  const { currentUser, loading } = useAuth()

  if (loading) {
    <div>
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
        </svg>
        loading
      </button>
    </div>
  }

  if (currentUser) {
    return children;
  }
  return <Navigate to='/login' replace />
}

export default Private_routes
