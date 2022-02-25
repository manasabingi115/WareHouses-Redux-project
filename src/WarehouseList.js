import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setClickedWarehouseIndex } from "./actions";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Search from "./Search";

const WarehouseList = (e) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.warehouses);
  const filters = useSelector((state) => state.filters);
  const {
    selectedCity,
    selectedCluster,
    selectedSpaceAvailable,
    searchText
  } = filters;
  let filteredData = [...data];

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

  if (searchText) {
    filteredData = filteredData.filter((data) =>
      data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  const HandleEditPge = (index) => {
    dispatch(setClickedWarehouseIndex(index));
  };

  return (
    <div>
      <Search />
      <Filter />
      {filteredData.map((data) => (
        <Link
          to={`/details/${data.id}`}
          className="house-name"
          key={data.id}
          onClick={(e) => {
            HandleEditPge(data.id);
          }}
        >
          {data.name}
        </Link>
      ))}
    </div>
  );
};

export default WarehouseList;
