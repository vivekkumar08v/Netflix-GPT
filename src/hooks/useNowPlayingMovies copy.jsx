import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies =() => {
    const dispatch =useDispatch();

    // const nowPlayingMovies = useSelector(Store=> Store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
      API_Options
      );
      const movies = await data.json();
      const d1=movies.results;
      dispatch(
        addNowPlayingMovies(d1),
      )
      
    };
  
    useEffect(() => {
       getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;

// // !nowPlayingMovies &&
