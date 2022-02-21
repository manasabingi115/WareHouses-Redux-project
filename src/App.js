import "./styles.css";
import React from "react";
import Data from "./Data";
import Filter from "./Filter";

export default function App() {
  const [selectCity, setSelectCity] = React.useState("Mumbai");

  // console.log(Data);

  return (
    <div className="App">
      <h1>Warehouses</h1>
      <br />
      <Filter selectCity={selectCity} setSelectCity={setSelectCity} />
      {/* {{ selectCity } === Data.city ? <p>hi</p> : <p>hello</p>} */}
      {Data.map((data) => (
        <p key={data.id}>{data.name}</p>
      ))}
    </div>
  );
}
