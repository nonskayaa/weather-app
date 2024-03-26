import { City } from "../../features/cititesApi";
import { useGetWeatherQuery } from "../../features/weatherApi";

import CityForecast from "../CityForecast/CityForecast";
import CityMainInfo from "../CityMainInfo/CityMainInfo";
import CityAdditionalInfo from "../CityAdditionalInfo/CityAdditionalInfo";

import classes from "./CityCard.module.css";
import LoadingIcon from "../icons/LoadingIcon/LoadingIcon";
import NotFoundIcon from "../icons/NotFoundIcon/NotFoundIcon";

export default function CityCard({ city }: { city: City }) {
  const { data, isLoading, isError } = useGetWeatherQuery({
    lon: Number(city.longitude.toFixed(2)),
    lat: Number(city.latitude.toFixed(2)),
  });

  if (isLoading) {
    return (
      <div className={classes.city_card__container}>
        <LoadingIcon />
      </div>
    );
  }
  if (isError || data?.length == 0) {
    return (
      <div className={classes.city_card__container}>
        <NotFoundIcon />
      </div>
    );
  }

  const data_now = data![0];
  return (
    <div className={classes.city_card__container}>
      <CityMainInfo weatherInfo={{ ...data_now, ...{ name: city.name } }} />

      <div className={classes.city_card__additional_info___container}>
        <CityForecast forecast={data!} />
        <CityAdditionalInfo
          additionalInfo={{
            humidity: data_now.humidity,
            wind_speed: data_now.wind_speed,
            feels_like: data_now.feels_like,
          }}
        />
      </div>
    </div>
  );
}
