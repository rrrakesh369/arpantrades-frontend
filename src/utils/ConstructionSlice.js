import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./constants";

export const fetchConstruction = createAsyncThunk(
  'construction/fetchConstruction',
  async (id) => {
    const res = await fetch(BASE_URL+'/construction/solutions/'+`${id}`);
    console.log(res)
    return await res.json();
  }
);

const constructionSlice = createSlice({
  name: 'construction',
  initialState: {
    _id: '',
    name: '',
    description: '',
    title: '',
    imageUrl: [],
    loading: false,
  },
  extraReducers: (builder) => {
   builder
      .addCase(fetchConstruction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConstruction.fulfilled, (state, action) => {
        state.loading = false;

        // Adjust this depending on your actual response structure
        const data = action.payload;

        state.id = data._id || data.id || ''; // support both
        state.name = data.name || '';
        state.description = data.description || '';
        state.title = data.title || '';
        state.imageUrl = Array.isArray(data.imageUrl) ? data.imageUrl : [];
      })
      .addCase(fetchConstruction.rejected, (state) => {
        state.loading = false;
      });
  },
});

// export const { addConstruction } = constructionSlice.actions;

export default constructionSlice.reducer;
