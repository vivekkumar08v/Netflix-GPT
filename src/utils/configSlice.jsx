import { createSlice } from "@reduxjs/toolkit";
import lang from "./languageConstants";

const configSlice =createSlice ({
    name: "config",
    initialState: {
        lang: "eng",
        audioMusic: "0",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang =action.payload;
        },
        muteAudio: (state) => {
            if(state.audioMusic === 0)
                {
                    state.audioMusic=1;
                }
            else 
            {
                state.audioMusic=0;
            }
            // state.audioMusic=action.payload;

        },
    },
});

export const {changeLanguage, muteAudio} = configSlice.actions;
export default configSlice.reducer;