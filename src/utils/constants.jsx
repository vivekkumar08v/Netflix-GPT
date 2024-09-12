export const Logo ="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const UserAvatar ="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";
 

export const API_Options ={
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_SUPERBASE_TMDB_KEY, 
    },
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg";

export const SUPPORTED_LANGUAGES = [{identifier: "eng", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"},    
];

export const AI_KEY = import.meta.env.VITE_SUPERBASE_AI_KEY;


