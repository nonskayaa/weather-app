import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export type CityCoordinates = {
  lon: number;
  lat: number;
};

export type Temperature = {
  temp: number;
  feels_like: number;
  temp_min: number; //
  temp_max: number; //
  humidity: number;
};

type WeatherType = {
  main: string;
};

type WeatherApiInfo = {
  weather: WeatherType[];
  main: Temperature;
  dt_txt: string;
  wind: { speed: number };
};

type WeatherApiInfoList = {
  list: WeatherApiInfo[];
};

export type WeatherInfo = {
  weather: string;
  date: string;

  temp: number;
  feels_like: number;
  wind_speed: number;
  humidity: number;
};

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherInfo[], CityCoordinates>({
      query: (coordinates) =>
        `forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=1799f917a779aeb015121ddacf2baebd`,
      transformResponse: (response: WeatherApiInfoList): WeatherInfo[] => {
        const transformed_data: WeatherInfo[] = [];

        for (let i = 0; i < 5; i++) {
          const api_data = response.list[i];

          transformed_data.push({
            weather: api_data.weather[0].main,
            date: api_data.dt_txt,

            temp: api_data.main.temp,
            feels_like: api_data.main.feels_like,
            wind_speed: api_data.wind.speed,
            humidity: api_data.main.humidity,
          });
        }
        return transformed_data;
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
