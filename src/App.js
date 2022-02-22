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
  const [search, setSearch] = React.useState("");

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
      (data) => data.space_available == selectedSpaceAvailable
    );
  }
  if (search) {
    filteredData = filteredData.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // console.log(filteredData);
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
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="search"
            placeholder="Search City"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <Filter
        setSelectedCity={setSelectedCity}
        setSelectedCluster={setSelectedCluster}
        setSelectedSpaceAvailable={setSelectedSpaceAvailable}
      />
      {filteredData ? <RenderData /> : <p>empty</p>}
    </div>
  );
}
