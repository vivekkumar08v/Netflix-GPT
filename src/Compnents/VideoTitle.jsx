import React from 'react'
import { muteAudio } from '../utils/configSlice'
import { useDispatch } from 'react-redux';

const VideoTitle = ({title, overview}) => {
  const dispatch = useDispatch();
  const mute_unmuteAudio =() => {
    dispatch(muteAudio());
  }
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='flex flow-root'>
            <div className='float-left my-4 md:m-0'>
            <button className='bg-[#fff] text-black text-x1 py-0 md:py-1 px-2 md:px-4 text-xl rounded hover:bg-opacity-70 items-center'>
                <img   className='w-6 h-6 float-left m-1'
                src='https://img.icons8.com/?size=100&id=9978&format=png&color=000000'
                alt="Play" 
                />Play 
            </button>
            <button className='hidden md:inline-block mx-4 bg-gray-600 text-white py-1 px-4 text-xl rounded hover:bg-opacity-70 items-center'>
              <img className='w-6 h-6 float-left m-1'
              src="https://img.icons8.com/?size=100&id=77&format=png&color=FFFFFF"
               alt="Info" />
               More Info</button>
            </div>
               <button  className=' float-right p-2 border rounded-full hover:opacity-70' onClick={mute_unmuteAudio} >
                <img  className='w-5 md:w-7 h-5 md:h-7'
                src="https://img.icons8.com/?size=100&id=9982&format=png&color=FFFFFF"
                alt="Mute" />
               </button>

        </div>
    </div>
  )
}

export default VideoTitle