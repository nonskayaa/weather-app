import React from "react";
import SearchIcon from "../../icons/SearchIcon";
import classes from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeSearchQuery } from "../../../features/searchCityQuerySlice";

import { debounce } from "lodash";

export default function Search() {
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchQuery(e.target.value));
  };

  const debouncedOnChange = debounce(onChange, 500);

  return (
    <div className={classes.search_container}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Type city"
        className={classes.search_input}
        onChange={debouncedOnChange}
      />
    </div>
  );
}
