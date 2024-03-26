import classes from "./CityForecast.module.css";
import { WeatherInfo } from "../../features/weatherApi";
import WeatherIcon from "../icons/WeatherIcon/WeatherIcon";

export default function CityForecast({
  forecast,
}: {
  forecast: WeatherInfo[];
}) {
  return (
    <div className={classes.forecast__container}>
      {forecast.map((forecastInfo) => (
        <WeatherIcon weatherInfo={forecastInfo} key={forecastInfo.date} />
      ))}
    </div>
  );
}
