import { createSlice } from '@reduxjs/toolkit'
// Define a type for the slice state
type ThemeState = boolean;

const themeFromLocalStorage = !!localStorage.getItem('movie-theme');
// Define the initial state using that type
const initialState: ThemeState = themeFromLocalStorage


export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) =>{
      if(state) {
        localStorage.removeItem('movie-theme')
      } else {
        localStorage.setItem('movie-theme','-')
      }
      return (state = !state)
    }
  },
})

export const { toggleTheme } = counterSlice.actions

export default counterSlice.reducer