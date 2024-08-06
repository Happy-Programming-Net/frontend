import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    regcourses: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.regcourses.push(action.payload)
    },
  },
});

export const { addCourse } = courseSlice.actions;

export default courseSlice.reducer;