import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/constants';

// export const fetchConstructions = createAsyncThunk(
//   'constructions/fetchAll',
//   async () => {
//     const res = await fetch(BASE_URL+'/construction/solutions');
//     if (!res.ok) throw new Error('Failed to fetch constructions');
//     return await res.json();
//   }
// );

const constructionAllSlice = createSlice({
  name: 'constructionAll',
  initialState: null,
  reducers: {
    addConstructionAll: (state,action)=>action.payload,
    // addConstructionById: (state,action)=>{
    //     const newId= state.filter((solutions)=>solutions._id===action.payload);
    //     return newId;
    // } ,
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchConstructions.pending, state => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchConstructions.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.items = action.payload;
  //     })
  //     .addCase(fetchConstructions.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // }
});
 export const {addConstructionAll}= constructionAllSlice.actions;
export default constructionAllSlice.reducer;
