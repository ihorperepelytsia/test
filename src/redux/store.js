import { configureStore } from "@reduxjs/toolkit";
import { photosApi } from "redux/apiPhotos";
import { setupListeners } from "@reduxjs/toolkit/query";
import { photoSlice } from "redux/photoSlice";

export const store = configureStore({
  reducer: {
    photo: photoSlice.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    photosApi.middleware,
  ],
});

setupListeners(store.dispatch);
