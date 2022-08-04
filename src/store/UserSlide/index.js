import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  authorized: false,
  role: 'simple_user',
  status:null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSimpleUser: (state) => {
      state.role = 'simple_user';
      state.authorized = false;
      state.status = 'logged!';
    },
    setAdmin: (state) => {
      state.role = 'admin';
      state.authorized = true;
      state.status = 'logged!';
    },
  },
});

export const { setSimpleUser, setAdmin } = userSlice.actions;
export default userSlice.reducer;
