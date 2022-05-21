import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const PublicRoute = () => {
  const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  if (auth?.isLoggedIn) {
      setTimeout(() => navigate('/dashboard'), 0) 
  }
  return (
    <React.Fragment>
        
        <Outlet />
    </React.Fragment>
  )
}

export default PublicRoute