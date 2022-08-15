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
    setUser: (state, action) => {
      const { name, status, role } = action.payload;
      state.role = role;
      state.authorized = true;
      state.status = status;
      state.name = name;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
