import AdditionalInfoIcon from "../icons/AdditionalInfoIcon/AdditionalInfoIcon";

import classes from "./CityAdditionalInfo.module.css";

import convertFromKelvinToCelsius from "../../utils/convertFromKelvinToCelsius";

type AdditionalInfo = {
  humidity: number;
  wind_speed: number;
  feels_like: number;
};

export default function CityAdditionalInfo({
  additionalInfo,
}: {
  additionalInfo: AdditionalInfo;
}) {
  return (
    <div className={classes.additional_info__container}>
      <AdditionalInfoIcon
        iconInfo={{
          name: "Wind", 
          amount: `${additionalInfo.wind_speed.toFixed(1)} km/h`,
        }}
      />
      <AdditionalInfoIcon
        iconInfo={{ name: "Humidity", amount: `${additionalInfo.humidity} %` }}
      />
      <AdditionalInfoIcon
        iconInfo={{
          name: "Feels",
          amount: `${convertFromKelvinToCelsius(additionalInfo.feels_like)} °C`,
        }}
      />
    </div>
  );
}
