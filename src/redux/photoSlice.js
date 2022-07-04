import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
  name: "photo",
  initialState: {
    fullPhoto: "",
  },
  reducers: {
    onChangeFullPhotoStore(state, action) {
      state.fullPhoto = action.payload;
    },
  },
});

export const { onChangeFullPhotoStore } = photoSlice.actions;
