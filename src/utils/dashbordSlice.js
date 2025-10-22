import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./constants";

// Async thunk to fetch dashboard data
export const fetchDashboard = createAsyncThunk(
  'dashboard/fetchDashboard',
  async () => {
    const response = await fetch(BASE_URL + '/dashboard');
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }
    return response.json();
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    title: '',
    imageUrl: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.title = action.payload.title;
        state.imageUrl = action.payload.imageUrl;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
