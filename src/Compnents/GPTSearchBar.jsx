import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
// import openai from '../utils/openai'

import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_KEY, API_Options } from '../utils/constants';
import { addGPTMovies } from '../utils/GPTSlice';
// import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";

const GPTSearchBar = () => {

  const dispatch = useDispatch();

  const langKey = useSelector((store)=> store.config.lang)
  const searchText = useRef(null);

  const searchMovieTMDB = async(movie) => {
    const data= await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
      API_Options
    );
    const json =await data.json()

    return json.results;
  }

  
  const handleGPTSearchClick = async() => {
    
     const prompt = "Act as a movie recommendation system and suggest some movies for the query :"+ 
      searchText.current.value  +
     "Only give me name of 5 movies with comma seperated. result should always look like - Spider Man, Elemental, Phir Hera Pheri and result should not have '/n'"

    // const GPTResult = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: prompt }],
    //   model: 'gpt-3.5-turbo',
    // });

    const genAI = new GoogleGenerativeAI(AI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    // const prompt = "Write a story about a magic backpack.";
  
    const result = await model.generateContent(prompt);
    (result.response.text());

    const gptmovies = result.response.text().split(",");

    

    const promiseArray = gptmovies.map(movie => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

   

    dispatch(addGPTMovies({movieNames: gptmovies, movieResults: tmdbResults}));
  };

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12'
        onSubmit={(e) =>e.preventDefault()}>
            <input
            ref={searchText} 
            type="text" 
            className='p-4 m-4 col-span-9'
            placeholder={lang[langKey].GPTSearchHolder}
            />
            <button 
            className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg font-bold'
            onClick={handleGPTSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar