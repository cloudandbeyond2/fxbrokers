// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  role: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { username, role, email } = action.payload;
      state.username = username;
      state.role = role;
      state.email = email;
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify({ username, role, email }));
      }
    },
    clearUser(state) {
      state.username = '';
      state.role = '';
      state.email = '';
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
      }
    },
    hydrateUser(state) {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const { username, role, email } = JSON.parse(storedUser);
          state.username = username;
          state.role = role;
          state.email = email;
        }
      }
    }
  },
});

export const { setUser, clearUser, hydrateUser } = userSlice.actions;
export default userSlice.reducer;
