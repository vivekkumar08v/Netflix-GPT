
import { useSelector } from 'react-redux';
import React from 'react' 
import useMovieTrailer from '../hooks/useMovieTrailer';

const Video_Background = (movieId) => {
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
    const audio_value = useSelector(store=>store.config.audioMusic);
    useMovieTrailer(movieId);

  return (
    <div className='w-screen'>

    <iframe 
     className='w-screen aspect-video'
     src={"https://www.youtube.com/embed/"+trailerVideo?.key + `?autoplay=1&controls=1&loop=1&mute=${audio_value}&rel=0`}
     title="YouTube video player" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    >
    </iframe>


    </div>
  )
}

export default Video_Background