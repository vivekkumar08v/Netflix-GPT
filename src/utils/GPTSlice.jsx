import { createSlice } from "@reduxjs/toolkit";

const GPTSlice =createSlice ({
    name: 'GPT',
    initialState: {
        showGPTSearch: false,
        // gptMovies: null,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showGPTSearch =!state.showGPTSearch;
        }, 
        addGPTMovies: (state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const {toggleSearchView, addGPTMovies} = GPTSlice.actions;
export default GPTSlice.reducer