import classes from "./CityMainInfo.module.css";

import formatDate from "../../utils/formatDate";
import convertFromKelvinToCelsius from "../../utils/convertFromKelvinToCelsius";
import { weatherIconsMapping } from "../../constants/weatherIconMapping";

type CityMainInfoProps = {
  name: string;
  weather: string;
  date: string;

  temp: number;
  feels_like: number;
  wind_speed: number;
  humidity: number;
};

export default function CityMainInfo({
  weatherInfo,
}: {
  weatherInfo: CityMainInfoProps;
}) {
  return (
    <div className={classes.city_card__container}>
      <h4 className={classes.city_card__name}>{weatherInfo.name}</h4>
      <p className={classes.city_card__date}>{formatDate(weatherInfo.date)}</p>
      <img
        src={weatherIconsMapping[weatherInfo.weather.toLocaleLowerCase()]}
        alt=""
        className={classes.city_card__img}
      />
      <p className={classes.city_card__weather}>{weatherInfo.weather}</p>
      <h3
        className={classes.city_card__temperature}
      >{`${convertFromKelvinToCelsius(weatherInfo.temp)}°C`}</h3>
    </div>
  );
}
