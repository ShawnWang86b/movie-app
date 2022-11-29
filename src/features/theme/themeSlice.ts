import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

// Define a type for the slice state
type ThemeState = boolean;


// Define the initial state using that type
const initialState: ThemeState = false;

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) =>{
        return (state = !state)
    }
  },
})

export const { toggleTheme } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer