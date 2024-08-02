import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    fname: "",
    lname: "",
    email: "",
    phone: "",
  },
  reducers: {
    updateUser: (state, action) => {
      state.id = action.payload["id"];
      state.fname = action.payload["fname"];
      state.lname = action.payload["lname"];
      state.email = action.payload["email"];
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
