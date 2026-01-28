// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { BASE_URL } from '../utils/constants';

// // Dynamic fetch thunk using prodType parameter
// export const fetchConstructionsByType = createAsyncThunk(
//   'constructionsByType/fetch',
//   async (prodType) => {
//     const res = await fetch(`${BASE_URL}/construction/solutions/Type/${prodType}`);
//     if (!res.ok) throw new Error('Failed to fetch constructions by type');
//     return await res.json();
//   }
// );

// const constructionsByTypeSlice = createSlice({
//   name: 'constructionsByType',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchConstructionsByType.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchConstructionsByType.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchConstructionsByType.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// export default constructionsByTypeSlice.reducer;
