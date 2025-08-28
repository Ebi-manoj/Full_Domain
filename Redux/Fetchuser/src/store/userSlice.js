import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetch', () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>
      data.map(user => {
        return { id: user.id, username: user.name };
      })
    );
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: [],
    error: '',
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const userReducer = userSlice.reducer;
