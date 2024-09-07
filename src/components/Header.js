import React from 'react'
import { LOGO } from '../utils/Constants'
import signoutlogo from '../utils/shutdown.png';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
      navigate("/");
      
    }).catch((error) => {
      // An error happened.
      navigate("/eror");
     
    });
    
  };
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL}= user;
          // ...
          dispatch(addUser({uid:uid, email:email,displayName:displayName,photoURL:photoURL}));
         
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
         
        }
      });
      

},[]);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className='w-44 my-2 md:mx-0' src={LOGO} alt='logo' />
      {user && (<div className='flex p-2' >
        <img alt='usericon' onClick={handleSignOut} className='h-12 w-12 my-2 cursor-pointer' src={signoutlogo}/>
    
      </div>)}
    </div>
  )
}

export default Header