import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies =() => {
    const dispatch =useDispatch();

    // const upcomingMovies =-useSelector((store) => store.movies.upcomingMovies)

    const getUpcomingMovies = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
      API_Options
      );
      const movies = await data.json();
      const d1=movies.results;
      dispatch(
        addUpcomingMovies(d1),
      )
      
    };
  
    useEffect(() => {
    
    getUpcomingMovies();
    },[]);
}

export default useUpcomingMovies;

// //  !upcomingMovies && 

