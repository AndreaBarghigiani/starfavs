import { createSlice, nanoid } from "@reduxjs/toolkit";

const favsSlice = createSlice({
  name: "favs",
  initialState: [],
  reducers: {
    addFav(state, action) {
      state.push(action.payload.url);
    },
    removeFav(state, action) {
      const index = state.indexOf(action.payload.url);
      state.splice(index, 1);
    },
  },
});

export const { addFav, removeFav } = favsSlice.actions;
export const favsReducer = favsSlice.reducer;
