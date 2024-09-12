import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img className='md:w-screen h-screen object-cover'
      src={BG_URL}
      alt="Background" />
    </div>

    <div className='pt-[30%] md:p-0'>   
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
    </>
   
  )
}

export default GPTSearch