import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies =() => {
    const dispatch =useDispatch();

    // const popularMovies = useSelector((store) => store.movies.popularMovies)

    const getPopularMovies = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular', 
      API_Options
      );
      const movies = await data.json();
      const d2=movies.results;
      dispatch(
        addPopularMovies(d2),
      )
      
    };
  
    useEffect(() => {
      getPopularMovies();
    },[]);
}

export default usePopularMovies;

// // !popularMovies &&

