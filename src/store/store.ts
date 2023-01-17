import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from '../services/articleApi'

import idReducer from "./idSlice";

export const store = configureStore({
    reducer:{
        [articleApi.reducerPath]: articleApi.reducer,
        id : idReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch