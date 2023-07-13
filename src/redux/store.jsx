import { configureStore } from "@reduxjs/toolkit";
import { fitnesApi } from "./fitnesApiBase";
import modalSliceReducer from "./modal-store";

export const store = configureStore({
  reducer: {
    [fitnesApi.reducerPath]: fitnesApi.reducer,
    modalWindow: modalSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fitnesApi.middleware),
});