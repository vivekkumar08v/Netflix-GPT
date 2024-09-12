import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {addUser, removeUser} from '../utils/userSlice';
import { Logo, SUPPORTED_LANGUAGES} from '../utils/constants';
import {addNowPlayingMovies} from '../utils/moviesSlice';
import { toggleSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const movies=useSelector((store)=>store.movies);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut =() => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        const {nowPlayingMovies}=movies;
        dispatch(
          addUser({ 
            uid:uid,
               email:email,
                displayName:displayName,
                 photoURL:photoURL
        })
        ,
        addNowPlayingMovies(nowPlayingMovies)
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribed when unauthstatechange call back
    return () => unsubscribe();
  },[]); 

  const handleSearchClick =() =>{
    //Toggle GPT Search
    dispatch(toggleSearchView());
  }

  const handleLanguageChange =(e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-full px-0 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img 
      className="w-26 h-14 mx-auto md:mx-0"
      src= {Logo}
      alt="Logo"
      />
      {user && (
        <div className='flex justify-center md:p-4 w-11/12 md:w-4/12'>
          {showGPTSearch&& (
            <select className='p-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
          )}

        <button 
        className='font-bold text-white md:truncate p-2 mx-4 bg-blue-800  md:w-full hover:bg-blue-900 rounded-lg'
         onClick={handleSearchClick}>
          {showGPTSearch? "Home Page":"GPT Search"}</button>
        <img 
        className='hidden md:block w-9 h-9'
        src={user?.photoURL} 
        alt="usericon"
        />
        <button onClick={handleSignOut} 
        className='font-bold text-white p-2 md:mx-4 bg-red-800 md:w-full hover:bg-red-900 rounded-lg'>
          Sign Out
          </button>
      </div>
      )}
      
    </div>

  )
}

export default Header
