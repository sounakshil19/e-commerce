import { createSlice } from "@reduxjs/toolkit";


export const TestSlice = createSlice({
  name: "test",
  initialState: {
    isLoggedIn: false, 
  },
  reducers: {
   
    login: (state) => { 
      state.isLoggedIn = true;  
    },
   
    logout: (state) => {
      state.isLoggedIn = false; 
    }
  },
});


export const { login, logout } = TestSlice.actions;

export default TestSlice.reducer;
