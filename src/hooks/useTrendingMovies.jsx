import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies =() => {
    const dispatch =useDispatch();

    // const trendingMovies = useSelector((store) => store.movies.trendingMovies);

    const getTrendingMovies = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', 
      API_Options
      );
      const movies = await data.json();
      const d1=movies.results;
      dispatch(
        addTrendingMovies(d1),
      )
      
    };
  
    useEffect(() => {
    getTrendingMovies();
    },[]);
}

export default useTrendingMovies;

// // !trendingMovies && 

