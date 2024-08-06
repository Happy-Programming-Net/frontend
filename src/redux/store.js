import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import courseSlice  from "./courses/courseSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    course: courseSlice,
  },
});
