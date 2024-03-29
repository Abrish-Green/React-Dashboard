import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../../Services/Redux/Actions/Users'

export const Content = () => {
  const [users,setUsers] = React.useState([])
  const dispatch = useDispatch()
  const loadAllUsers = useSelector(state => state.users)
  
  React.useEffect(() => {
    dispatch(loadUsers())
    
      setUsers(loadAllUsers.users)

  }, [loadAllUsers.loading])
  
  console.log(users)
  return (
    <React.Fragment>
        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
            <div className="bg-white p-8 rounded-md w-full">
                <div className=" flex items-center justify-between pb-6">
                    <div>
                        <h2 className="hidden md:flex text-gray-600 font-semibold text-3xl">Users</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex bg-gray-50 items-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="bg-gray-50 outline-none ml-1 block w-full border-b-2 border-slate-700" type="text" name="" id="" placeholder="search..." />
                    </div>
                            <div className="lg:ml-40 ml-10 space-x-8">
                                <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Username
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Gender
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Mobile
                                            </th>
                                            
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                      <tbody>
                                          {
                                              loadAllUsers.loading && "Loading..."
                                          }
                                          {
                                              (loadAllUsers?.users && !loadAllUsers.loading)
                                              &&
                                              loadAllUsers.users.map((user) => {
                                                  return (
                                                            <tr>
                                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <div className="flex items-center">
                                                                        <div className="flex-shrink-0 w-10 h-10">
                                                                            <img className="w-full h-full rounded-full"
                                                                                src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                                                                                alt="" />
                                                                        </div>
                                                                            <div className="ml-3">
                                                                                <p className="text-gray-900 whitespace-no-wrap">
                                                                                    {user.username}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                </td>
                                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                              <p className="text-gray-900 whitespace-no-wrap">{ user.gender}</p>
                                                                </td>
                                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        {user.email}
                                                                    </p>
                                                                </td>
                                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        {user.phoneNumber}
                                                                    </p>
                                                                </td>
                                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    <span
                                                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                                        <span aria-hidden
                                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                                  <span className="relative">{ user.active ? 'activo': 'inactive'}</span>
                                                                    </span>
                                                                </td>
                                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                                    
                                                                    <button>
                                                                            <span className="tracking-wider text-white bg-blue-500 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
                                                                                <i className="fas fa-award" aria-hidden="true"></i> Edit
                                                                            </span>
                                                                    </button>
                                                                    <button>
                                                                            <span className="tracking-wider text-white bg-red-500 px-4 py-1 text-sm rounded leading-loose mx-2 font-semibold" title="">
                                                                                <i className="fas fa-heart" aria-hidden="true"></i> Delete
                                                                            </span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                              })
                                          }
                                        
                                        
                                    </tbody>
                                </table>
                                <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        &nbsp; &nbsp;
                                        <button
                                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <p className="text-center text-sm text-gray-500 my-10">
            © 2019-2021 <a href="https://themesberg.com" className="hover:underline" target="_blank">Themesberg</a>. All rights reserved.
            </p>
            </div>
    </React.Fragment>
  )
}


export default Content