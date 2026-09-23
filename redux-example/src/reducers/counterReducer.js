import { createSlice } from '@reduxjs/toolkit';

// This is where the number is stored initially
const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            // State är vårt state som vi har i vår store. Vi kan uppdatera det direkt här.
            state.value += action.payload;
        }
    }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;