import { configureStore } from "@reduxjs/toolkit";
import { fitnesApi } from "./fitnesApiBase";



export const store = configureStore ({

    reducer: {        
        [fitnesApi.reducerPath]: fitnesApi.reducer,              
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fitnesApi.middleware)
})