import React from "react";
import Data from "./Data";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCity,
  setSelectedCluster,
  setSelectedSpaceAvailable
} from "./actions";

export default function Filter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const { selectedCity, selectedCluster, selectedSpaceAvailable } = filters;
  const onSelectChangeCity = (event) => {
    dispatch(setSelectedCity(event.target.value));
  };
  const onSelectChangeCluster = (event) => {
    dispatch(setSelectedCluster(event.target.value));
  };
  const onSelectChangeSpaceAvailable = (event) => {
    dispatch(setSelectedSpaceAvailable(event.target.value));
  };
  const UniqueCities = [...new Set(Data.map((el) => el.city))];
  const UniqueClusters = [...new Set(Data.map((el) => el.cluster))];

  return (
    <div>
      <select
        className="filters"
        name="city"
        onChange={onSelectChangeCity}
        value={selectedCity}
      >
        <option key="all" value="">
          All
        </option>
        {UniqueCities.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <select
        className="filters"
        name="cluster"
        onChange={onSelectChangeCluster}
        value={selectedCluster}
      >
        <option key="all" value="">
          All
        </option>
        {UniqueClusters.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <select
        className="filters"
        name="space-available"
        onChange={onSelectChangeSpaceAvailable}
        value={selectedSpaceAvailable}
      >
        <option key="all" value="">
          All
        </option>
        {Data.map((data, index) => {
          return (
            <option key={index} value={data.space_available}>
              {data.space_available}
            </option>
          );
        })}
      </select>
    </div>
  );
}
