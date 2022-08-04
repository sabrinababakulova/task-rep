import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  authorized: false,
  role: 'simple_user',
  status: null,
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSimpleUser: (state, action) => {
      const { name, status } = action.payload;
      state.role = 'simple_user';
      state.authorized = false;
      state.status = status;
      state.name = name;
    },
    setAdmin: (state, action) => {
      const { name, status } = action.payload;
      state.role = 'admin';
      state.authorized = true;
      state.status = status;
      state.name = name;
    },
  },
});

export const { setSimpleUser, setAdmin } = userSlice.actions;
export default userSlice.reducer;
