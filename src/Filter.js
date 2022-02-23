import React from "react";
import Data from "./Data";

export default function Filter({
  setSelectedCity,
  setSelectedCluster,
  setSelectedSpaceAvailable
}) {
  const onSelectChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };
  const onSelectChangeCluster = (event) => {
    setSelectedCluster(event.target.value);
  };
  const onSelectChangeSpaceAvailable = (event) => {
    setSelectedSpaceAvailable(event.target.value);
  };
  const UniqueCities = [...new Set(Data.map((el) => el.city))];
  const UniqueClusters = [...new Set(Data.map((el) => el.cluster))];
  // const UniqueSpaceAvailable = [
  //   ...new Set(Data.map((el) => el.space_available))
  // ];
  // console.log(UniqueSpaceAvailable);

  return (
    <div>
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
