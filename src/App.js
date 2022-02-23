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
  const [clickedWarehouseIndex, setClickedWarehouseIndex] = React.useState();
  const [editPage, setEditPage] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(Data);
  }, []);

  let filteredData = [...data];
  const updateWareHouseAtIndex = (editedDetails, index) => {
    setData((prevData) => {
      prevData[index] = editedDetails;
      return prevData;
    });
  };

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

  const HandleEditPge = (index) => {
    setClickedWarehouseIndex(index);
    setEditPage(true);
  };

  const RenderData = (e) => {
    return (
      <div>
        {filteredData.map((data, index) => (
          <p
            key={data.id}
            onClick={(e) => {
              e.preventDefault();
              HandleEditPge(index);
            }}
          >
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
          index={clickedWarehouseIndex}
          clickedWarehouseData={data[clickedWarehouseIndex]}
          setEditPage={setEditPage}
          updateWareHouseAtIndex={updateWareHouseAtIndex}
        />
      ) : (
        filteredData && <RenderData />
      )}
    </div>
  );
}
