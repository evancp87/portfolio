import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProjects } from "../utils/helpers";
const initialState = {
  projects: [],
  sortInput: {},
};
export const setProjects = createAsyncThunk(
  "projects/setProjects",
  async () => {
    try {
      const response = await getProjects();
      return response;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    sort: (state, action) => {
      state.sortInput = action.payload;
    },
    reset: (state) => {
      state.sortInput = initialState.sortInput;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

export const { sort, reset } = projectsSlice.actions;

export const selectReset = (state) => state.projects.reset;
export const selectSort = (state) => state.projects.sortInput;
export const selectProjects = (state) => state.projects.projects;

export default projectsSlice.reducer;
