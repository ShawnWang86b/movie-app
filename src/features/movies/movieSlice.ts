import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//Action
export const getMovies = createAsyncThunk('movies/getMovies', async (data,thunkApi) =>{

    try{
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_MOVIE_KEY}}`
        );
        return response.json();
    }catch(error: any){
        thunkApi.rejectWithValue(error.message)
    }
}
) 