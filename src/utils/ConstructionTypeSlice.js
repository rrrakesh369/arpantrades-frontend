import { createSlice } from "@reduxjs/toolkit";

const constructionTypeSlice = createSlice({
  name: "constructionType",
  initialState: {
    type: "",
    items: [],
  },
  reducers: {
    addConstructionType: (state, action) => {
      state.type = action.payload.type;  // ✅ Now defined
      state.items = action.payload.items; // ✅ API data
    },
  },
});

export const { addConstructionType } = constructionTypeSlice.actions;
export default constructionTypeSlice.reducer;
