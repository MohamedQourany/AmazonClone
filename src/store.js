import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
