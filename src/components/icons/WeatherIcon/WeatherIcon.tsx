import classes from "./WeatherIcon.module.css";

import { weatherIconsMapping } from "../../../constants/weatherIconMapping";
import { WeatherInfo } from "../../../features/weatherApi";

import convertFromKelvinToCelsius from "../../../utils/convertFromKelvinToCelsius";
import formatTime from "../../../utils/formatTime";

export default function WeatherIcon({
  weatherInfo,
}: {
  weatherInfo: WeatherInfo;
}) {
  return (
    <div className={classes.weather_icon__container}>
      <p className={classes.weather_icon__time}>
        {formatTime(weatherInfo.date)}
      </p>
      <img
        src={weatherIconsMapping[weatherInfo.weather.toLocaleLowerCase()]}
        alt="weather icon"
        className={classes.weather_icon__image}
      />
      <p className={classes.weather_icon__temperature}>
        {`${convertFromKelvinToCelsius(weatherInfo.temp)}°C`}
      </p>
    </div>
  );
}
