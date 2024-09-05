import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/Constants'

const Login = () => {
    const [isSingInForm,setIsSingInForm]=useState(true);
    const toggleSignInform=()=>{
        setIsSingInForm(!isSingInForm);
    }
    return (
        <div>
            <Header />
            <div>
                <div className='absolute'>
                    <img src={BG_URL} alt="logo" />
                </div>
            </div>
            <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className='font-bold text-3xl py-4'>{isSingInForm?"Sign In": "Sign Up"}</h1>
                <input type='text' placeholder='Email' className='p-2 my-4 w-full bg-gray-800 rounded-lg' />
                {!isSingInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-800 rounded-lg' ></input>}
                <input type='password' placeholder='Password' className='p-2 my-4  bg-gray-800 rounded-lg w-full' />
                <button className='p-4 my-6 bg-red-700  rounded-lg  w-full'>{isSingInForm?"Sign In": "Sign Up"}</button>
                <p className='py-4 cursor-pointer ' onClick={toggleSignInform} >{isSingInForm?"New to Netflix ? Sign Up now": "Already Registered ? Sign In now"}</p>
            </form>
        </div>
    )
}

export default Login