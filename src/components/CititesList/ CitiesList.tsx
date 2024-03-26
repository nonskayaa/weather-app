
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { useGetCityByNameQuery } from "../../features/cititesApi";

import CityCard from "../CityCard/CityCard";

import { City } from "../../features/cititesApi";
import NotFoundIcon from "../icons/NotFoundIcon/NotFoundIcon";

import classes from "./CititesList.module.css";

export default function CitiesList() {
  const searchCityQuery = useSelector(
    (state: RootState) => state.searchCityQuery.query
  );

  const { data, isError } = useGetCityByNameQuery(searchCityQuery);
  const listOfCities: City[] = data as City[]; //

  if (isError || data?.length == 0) {
    return (
      <div className={classes.city_card__container}>
        <NotFoundIcon />
      </div>
    );
  }
  return (
    <div className={classes.cities__container}>
      {listOfCities?.map((city) => {
        return <CityCard key={city.id} city={city} />;
      })}
    </div>
  );
}
