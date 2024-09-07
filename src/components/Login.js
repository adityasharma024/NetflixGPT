import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/Constants'
import { checkValidData } from '../utils/validates';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSingInForm, setIsSingInForm] = useState(true);
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();


    const toggleSignInform = () => {
        setIsSingInForm(!isSingInForm);
    }
    const handleButtonClick = () => {

        const message = checkValidData(email.current.value, password.current.value);

        setErrorMessage(message)

        if (message) return;

        //SignUp 
        if (!isSingInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    }).then(
                        ()=>{
                            navigate('/browse');

                        }
                    ).catch((err)=>{
                        setErrorMessage(err.message);
                    })
                   
                    
                })
                .catch((error) => {
                    const errorCode = error.code;

                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                    // ..
                });


        }
        else {
            //Sign In

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                   
                    navigate('/browse')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });


        }

    }
    return (
        <div>
            <Header />
            <div>
                <div className='absolute'>
                    <img src={BG_URL} alt="logo" />
                </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sign Up"}</h1>
                <input type='text' ref={email} placeholder='Email' className='p-2 my-4 w-full bg-gray-800 rounded-lg' />
                {!isSingInForm && <input type='text' ref={name} placeholder='Full Name' className='p-2 my-4 w-full bg-gray-800 rounded-lg' ></input>}
                <input type='password' ref={password} placeholder='Password' className='p-2 my-4  bg-gray-800 rounded-lg w-full' />
                <p className='text-red-500'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700  rounded-lg  w-full'>{isSingInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer ' onClick={toggleSignInform} >{isSingInForm ? "New to Netflix ? Sign Up now" : "Already Registered ? Sign In now"}</p>
            </form>
        </div>
    )
}

export default Login