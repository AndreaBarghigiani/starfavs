import { configureStore } from "@reduxjs/toolkit";
import { favsReducer, addFav, removeFav } from "./slices/favourites";
import { starApi } from "./api/starWarsApi";
import { photoApi } from "./api/unsplashApi";

const store = configureStore({
  reducer: {
    favs: favsReducer,
    [starApi.reducerPath]: starApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(starApi.middleware)
      .concat(photoApi.middleware),
});

export { store, addFav, removeFav };
export { useFetchDataQuery, useSearchAnyQuery } from "./api/starWarsApi";
export { useRandomPhotoQuery } from "./api/unsplashApi";
