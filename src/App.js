import "./styles.css";
import React from "react";
import Data from "./Data";
import Filter from "./Filter";

export default function App() {
  const [selectedCity, setSelectedCity] = React.useState("");
  const [selectedCluster, setSelectedCluster] = React.useState("");
  const [selectedSpaceAvailable, setSelectedSpaceAvailable] = React.useState(
    ""
  );

  let filteredData = [...Data];
  if (selectedCity) {
    filteredData = filteredData.filter((data) => data.city === selectedCity);
  }
  if (selectedCluster) {
    filteredData = filteredData.filter(
      (data) => data.cluster === selectedCluster
    );
  }
  if (selectedSpaceAvailable) {
    filteredData = filteredData.filter(
      (data) => data.space_available === selectedSpaceAvailable
    );
  }

  console.log(filteredData);
  function RenderData() {
    return (
      <div>
        {filteredData.map((data) => (
          <p key={data.id}>{data.name}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Warehouses</h1>
      <br />
      <Filter
        setSelectedCity={setSelectedCity}
        setSelectedCluster={setSelectedCluster}
        setSelectedSpaceAvailable={setSelectedSpaceAvailable}
      />
      {filteredData ? <RenderData /> : <p>empty</p>}
    </div>
  );
}
