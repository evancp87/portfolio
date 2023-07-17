import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
import projectsReducer from "../services/projectsSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  //   middleware: [thunk, logger],
});

export default store;
