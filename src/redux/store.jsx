import { configureStore } from "@reduxjs/toolkit";
import { fitnesApi } from "./fitnesApiBase";
import modalSliceReducer from "./slices/modal-store";
import userReduser from "./slices/userSlice"
import { workoutsApi } from "./workoutsApi";

export const store = configureStore({
  reducer: {
    user: userReduser,
    [fitnesApi.reducerPath]: fitnesApi.reducer,
    [workoutsApi.reducerPath]: workoutsApi.reducer,
    modalWindow: modalSliceReducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      fitnesApi.middleware,
      workoutsApi.middleware,
    ]),
});