//Slices is a way to organize our reducers and actions in a single file. It is a part of the Redux Toolkit library. 
// It helps us to write less code and avoid boilerplate code. 
// It also provides us with some useful features like immer, which allows us to write immutable code in a mutable way. 
// We can create a slice using the createSlice function from the Redux Toolkit library. 
// It takes an object as an argument which contains the name of the slice, the initial state, and the reducers. 
// The reducers are the functions that will handle the actions and update the state accordingly. 
// We can also export the actions and the reducer from the slice file and use them in our components.
import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    count: 0
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState: intialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const { increment, decrement, reset } = CounterSlice.actions

export default CounterSlice.reducer