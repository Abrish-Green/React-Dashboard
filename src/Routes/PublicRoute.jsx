import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicRoute = () => {
  return (
    <React.Fragment>
        
        <Outlet />
    </React.Fragment>
  )
}

export default PublicRoute