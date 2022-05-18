import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Services/Actions/Auth';
const Login = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [nameErr,setNameErr] = React.useState(false)
    const [passwordErr,setPasswordErr] = React.useState(false)

    const [user, setUser] = React.useState({
        name: '',
        password: ''
    })
    const HandleSubmit = (e) => {
        setNameErr(false)
        setPasswordErr(false)
        e.preventDefault()
        if(user.name == '') setNameErr(true)
        if(user.password == '') setPasswordErr(true)
        if(user.name != '' && user.password != ''){
            dispatch(login(user))
        }
    }
    return (
        <React.Fragment>      
                <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
                   
                    <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                        <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                Sign in to platm
                            </h2>
                            <div className="mt-8 space-y-6">
                                <div>
                                    <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Username</label>
                                    <input type="text" value={user.name} onChange={(e) => setUser({...user,name:e.target.value})} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="name@company.com" required/>
                                </div>
                                <span className="text-red-700 font-bold text-sm"> {nameErr  && "Username Can't be empty" }</span>

                                <div>
                                    <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
                                    <input type="password" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required/>
                                    <span className="text-red-700 font-bold text-sm"> {passwordErr && "Password Can't be empty" }</span>

                                </div>
                               
                                <button onClick={HandleSubmit} className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center">Login</button>
                                <div className="text-sm font-medium text-gray-500">
                                    Not registered? <a href="" className="text-teal-500 hover:underline">Create account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        );
  }
  
  export default Login;
  