import { configureStore } from "@reduxjs/toolkit";

import { citiesApi } from "./features/cititesApi";

import searchCityQueryReducer from "./features/searchCityQuerySlice";
import { weatherApi } from "./features/weatherApi";

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,

    searchCityQuery: searchCityQueryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(citiesApi.middleware)
      .concat(weatherApi.middleware), //
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
