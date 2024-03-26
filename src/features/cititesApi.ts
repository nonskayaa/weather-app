import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type City = {
  id: number;
  name: string;
  country: string;

  latitude: number;
  longitude: number;
};

export const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wft-geo-db.p.rapidapi.com/v1/geo/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "218785d199mshc8515c6a8e3bc4ap162875jsn2fc0cd0ae802"
      );
      headers.set("X-RapidAPI-Host", "wft-geo-db.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCityByName: builder.query<City[], string>({
      query: (cityName: string) => `cities?namePrefix=${cityName}&countryIds=RU&limit=1`,

      transformResponse: (response: { data: City[] }) => response.data,
    }),
  }),
});

export const { useGetCityByNameQuery } = citiesApi;
