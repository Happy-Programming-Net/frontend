import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    role: "",
    id: 0,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    about: "",
  },
  reducers: {
    updateUser: (state, action) => {
      if (action.payload["role"] === "student") {
        state.role = action.payload["role"];
        state.id = action.payload["id"];
        state.fname = action.payload["fname"];
        state.lname = action.payload["lname"];
        state.email = action.payload["email"];
      } else {
        state.role = action.payload["role"];
        state.id = action.payload["id"];
        state.fname = action.payload["fname"];
        state.lname = action.payload["lname"];
        state.email = action.payload["email"];
        state.phone = action.payload["phone"];
        state.about = action.payload["about"];
      }
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
