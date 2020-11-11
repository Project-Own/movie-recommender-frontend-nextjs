import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./Snackbar/snackbarSlice";
export default configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});
