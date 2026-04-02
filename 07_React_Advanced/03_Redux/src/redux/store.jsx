//Store is the place where we keep all our states. It is the single source of truth for our application. 
// We can access the state from the store and update the state using actions and reducers. 
// We can also use middleware to handle asynchronous actions and side effects.
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice
    }
})