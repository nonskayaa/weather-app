import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const defaultCity: string = "Kazan";

type searchQueryState =  {
  query: string;
}

const initialState: searchQueryState = {
  query: defaultCity,
};

export const searchCityQuerySlice = createSlice({
  name: "searchCityQuery",
  initialState,
  reducers: {
    changeSearchQuery: (state, action: PayloadAction<string>) => {
      if (action.payload.length > 0) {
        state.query = action.payload;
      } else {
        state.query = defaultCity;
      }
    },
  },
});

export const { changeSearchQuery } = searchCityQuerySlice.actions;

export default searchCityQuerySlice.reducer;
