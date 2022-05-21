import React from 'react'
import Content from '../../Components/Dashboard/Content'
import Navbar from '../../Components/Dashboard/Navbar'
import Sidebar from '../../Components/Dashboard/Sidebar'

const Dashboard = () => {
  return (
    <React.Fragment>
        <Navbar />
        <div className="flex overflow-hidden bg-white pt-16">
            <Sidebar />
            <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <Content />
        </div>
    </React.Fragment>
  )
}

export default Dashboard