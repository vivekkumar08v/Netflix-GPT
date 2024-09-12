import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer =(movieId) => {
    const dispatch= useDispatch();

    // const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovievideos = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"
            +movieId.movieId+
            "/videos?language=en-US", API_Options);
        const json =await data.json();
    

        const filterData =json.results.filter((video) => video.type ==="Trailer");
        const trailer = filterData.length? filterData[0] : json.results[0];
        
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=> {
        getMovievideos();
    },[]);
}

export default useMovieTrailer;

 // // !trailerVideo &&