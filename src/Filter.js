import React from "react";
import Data from "./Data";

export default function Filter({ selectCity, setSelectCity }) {
  // console.log(Data);
  const onSelectChange = (event) => {
    // console.log(event.target.value);
    setSelectCity(event.target.value);
  };
  const UniqueCities = [...new Set(Data.map((el) => el.city))];
  const UniqueClusters = [...new Set(Data.map((el) => el.cluster))];

  return (
    <div>
      <select name="city" onChange={onSelectChange}>
        {UniqueCities.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <select name="city" onChange={onSelectChange}>
        {UniqueClusters.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <select name="city" onChange={onSelectChange}>
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
