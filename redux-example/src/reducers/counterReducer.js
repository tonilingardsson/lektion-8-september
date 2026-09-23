import { createSlice } from '@reduxjs/toolkit';

// This is where the number is stored initially
const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // This increments the number
        increment: (state, action) => {
            // State är vårt state som vi har i vår store. Vi kan uppdatera det direkt här.
            state.value += action.payload;
        },

        decrement: (state, action) => {
            state.value -= action.payload;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;