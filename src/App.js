import "./styles.css";
import React from "react";
import Data from "./Data";
import Filter from "./Filter";
import DetailsPage from "./Details-page";

export default function App() {
  const [selectedCity, setSelectedCity] = React.useState("");
  const [selectedCluster, setSelectedCluster] = React.useState("");
  const [selectedSpaceAvailable, setSelectedSpaceAvailable] = React.useState(
    ""
  );
  const [search, setSearch] = React.useState("");
  const [clickedWarehouseData, setClickedWarehouseData] = React.useState();
  const [editPage, setEditPage] = React.useState(false);

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

  const HandleEditPge = (data) => {
    setClickedWarehouseData(data);
    setEditPage(true);
  };

  // console.log(clickedWarehouseData);
  const RenderData = (e) => {
    return (
      <div>
        {filteredData.map((data) => (
          <p key={data.id} onClick={() => HandleEditPge(data)}>
            {data.name}
          </p>
        ))}
      </div>
    );
  };

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
      {editPage ? (
        <DetailsPage
          clickedWarehouseData={clickedWarehouseData}
          setEditPage={setEditPage}
        />
      ) : (
        filteredData && <RenderData />
      )}
    </div>
  );
}
