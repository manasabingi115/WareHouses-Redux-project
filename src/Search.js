import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSearchText } from "./actions";

const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.filters);
  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="search"
          placeholder="Search WareHouse..."
          value={searchText}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
      </div>
    </div>
  );
};
export default Search;
