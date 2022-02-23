import React from "react";
import Data from "./Data";

export default function Filter({
  setSelectedCity,
  setSelectedCluster,
  setSelectedSpaceAvailable,
  setAllButton
}) {
  const onSelectChangeCity = (event) => {
    setSelectedCity(event.target.value);
    setAllButton(false);
  };
  const onSelectChangeCluster = (event) => {
    setSelectedCluster(event.target.value);
    setAllButton(false);
  };
  const onSelectChangeSpaceAvailable = (event) => {
    setSelectedSpaceAvailable(event.target.value);
    setAllButton(false);
  };
  const UniqueCities = [...new Set(Data.map((el) => el.city))];
  const UniqueClusters = [...new Set(Data.map((el) => el.cluster))];

  return (
    <div>
      <button onClick={() => setAllButton(true)}>All</button>
      <select name="city" onChange={onSelectChangeCity}>
        {UniqueCities.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <select name="cluster" onChange={onSelectChangeCluster}>
        {UniqueClusters.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <select name="space-available" onChange={onSelectChangeSpaceAvailable}>
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
